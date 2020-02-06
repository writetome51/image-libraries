import { DBImage } from '../../interfaces/db-image';
import { LibraryData as library } from '../../data/runtime-state-data/library.data';
import { getMax } from '@writetome51/get-max-min';
import { hasValue } from '@writetome51/has-value-no-value';
import { Injectable } from '@angular/core';
import { isInteger } from '@writetome51/is-integer-is-float';
import { ListItemMoverService } from '../list-item-mover.service';
import { ItemBeingMoved } from '../../interfaces/item-being-moved';
import { removeHead } from '@writetome51/array-remove-head-tail';
import { Unsubscribable } from 'rxjs';
import { ListItemRemoverService } from '../list-item-remover.service';
import { ImagesToDisplayService } from '../image/images-to-display.service';


@Injectable({providedIn: 'root'})

export class LibraryChangesService {

	// Stores all changes.  Properties should be assigned as strings so they can include
	// dot-notation.

	subscriptions: Unsubscribable[] = [];
	private __data = {};


	get exist(): boolean {
		return (Object.keys(this.__data).length > 0);
	}


	constructor(
		private __listItemMover: ListItemMoverService,
		private __listItemRemover: ListItemRemoverService,
		private __imagesToDisplay: ImagesToDisplayService
	) {
	}


	// property can have dot-notation.

	getInside(property): object {
		let changesWithin_property = {};
		let keys = Object.keys(this.__data);
		for (let i = 0; i < keys.length; ++i) {
			if (keys[i].startsWith(property + '.') && (keys[i].length > (property + '.').length)) {
				let parts = keys[i].split(property + '.');
				removeHead(1, parts);
				let key = parts.join('');
				changesWithin_property[key] = this.__data[keys[i]];
			}
		}
		return changesWithin_property;
	}


	getExact(property) {
		let keys = Object.keys(this.__data);

		for (let i = 0; i < keys.length; ++i) {
			if (keys[i] === property) return this.__data[keys[i]];
		}
	}


	getNewImages(): DBImage[] {
		let newImages = [];
		let images_changes = this.getInside('images');
		let keys = Object.keys(images_changes);
		for (let i = 0; i < keys.length; ++i) {
			// if current key is integer, its value is an DBImage
			if (isInteger(Number(keys[i]))) newImages.push(images_changes[keys[i]]);
		}
		return newImages;
	}


	getHighestImageIndex(): number {
		let keys = Object.keys(this.getInside('images'));
		let numberKeys = [];
		for (let i = 0; i < keys.length; ++i) {
			let key = keys[i].split('.')[0];
			if (isInteger(Number(key))) numberKeys.push(key);
		}
		return getMax(numberKeys);
	}


	getAll(): object {
		return this.__data;
	}


	// property can have dot-notation.

	has(property): boolean {
		let keys = Object.keys(this.__data);
		for (let i = 0; i < keys.length; ++i) {
			if (keys[i].startsWith(property + '.') || keys[i] === property) return true;
		}
		return false;
	}


	hasExact(property): boolean{
		let keys = Object.keys(this.__data);
		for (let i = 0; i < keys.length; ++i) {
			if (keys[i] === property) return true;
		}
		return false;
	}


	// propertyToChange can have dot-notation.

	set(propertyToChange, newValue): void {
		this.__data[propertyToChange] = newValue;
	}


	// propertyToUnset can have dot-notation.

	unset(propertyToUnset): void {
		delete this.__data[propertyToUnset];
	}


	unsetAll(): void {
		this.__data = {};
	}

}

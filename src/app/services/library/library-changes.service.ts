import { Injectable } from '@angular/core';
import { CurrentLibraryData as library } from '../../data/current-library.data';
import { AppImage } from '../../interfaces/app-image';
import { removeHead } from '@writetome51/array-remove-head-tail';
import { isInteger } from '@writetome51/is-integer-is-float';


@Injectable({providedIn: 'root'})

export class LibraryChangesService {

	// Stores all changes.  Properties should be assigned as strings so they can include
	// dot-notation.

	private static __data = {};


	static get exist(): boolean {
		return (Object.keys(this.__data).length > 0);
	}


	static get libraryName(): string {
		return library.data.name;
	}


	// property can have dot-notation.

	static getInside(property): object {
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


	static getExact(property) {
		let keys = Object.keys(this.__data);

		for (let i = 0; i < keys.length; ++i) {
			if (keys[i] === property) return this.__data[keys[i]];
		}
	}


	static getImages(): AppImage[] {
		let images = [];
		let images_changes = this.getInside('images');
		let keys = Object.keys(images_changes);
		for (let i = 0; i < keys.length; ++i) {
			if (isInteger(Number(keys[i]))) images.push(images_changes[keys[i]]);
		}
		return images;
	}


	static getAll(): object {
		return this.__data;
	}


	// property can have dot-notation.

	static has(property): boolean {
		let keys = Object.keys(this.__data);
		for (let i = 0; i < keys.length; ++i) {
			if (keys[i].startsWith(property + '.') || keys[i] === property) return true;
		}
		return false;
	}


	// propertyToChange can have dot-notation.

	static set(propertyToChange, newValue): void {
		this.__data[propertyToChange] = newValue;
	}


	// propertyToUnset can have dot-notation.

	static unset(propertyToUnset): void {
		delete this.__data[propertyToUnset];
	}


	static unsetAll(): void {
		this.__data = {};
	}

}

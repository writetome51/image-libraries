import { errorIfNotInteger } from 'error-if-not-integer';
import { Injectable } from '@angular/core';
import { ItemBeingMoved } from '@interfaces/item-being-moved';
import { moveByIndex } from '@writetome51/array-move-by-index';
import { PublicArrayContainer } from '@writetome51/public-array-container';
import { Subject, Subscribable } from 'rxjs';


@Injectable({providedIn: 'root'})

export class ListItemMoverService extends PublicArrayContainer {

	private __subject = new Subject();
	private __indexBeingMoved: number;


	constructor() {
		super();
	}


	get itemBeingMoved(): Subscribable<ItemBeingMoved> {
		return this.__subject;
	}


	set indexBeingMoved(value) {
		errorIfNotInteger(value);
		this.__indexBeingMoved = value;
	}


	get indexBeingMoved(): number {
		return this.__indexBeingMoved;
	}


	moveItemTo(newIndex): void {
		moveByIndex(this.__indexBeingMoved, newIndex, this.data);

		this.__subject.next({
			indexBeingMoved: this.__indexBeingMoved,
			newIndex
		});
		this.__indexBeingMoved = -1;
	}


}

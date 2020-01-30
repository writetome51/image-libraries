import { Subject, Subscribable } from 'rxjs';
import { errorIfNotInteger } from 'error-if-not-integer';
import { Injectable } from '@angular/core';
import { moveByIndex } from '@writetome51/array-move-by-index';
import { PublicArrayContainer } from '@writetome51/public-array-container';
import { ItemBeingMoved } from './item-being-moved';


@Injectable()

// This will have to create an Observable (use BehaviorSubject)
// that will call .next() every time it moves a list item.

export class ListItemMoverService extends PublicArrayContainer {

	private __subject = new Subject();
	private __indexBeingMoved: number;


	constructor() {
		super();
	}


	get subscribable(): Subscribable<ItemBeingMoved> {
		return this.__subject;
	}


	set indexBeingMoved(value) {
		errorIfNotInteger(value);
		this.__indexBeingMoved = value;
	}


	get indexBeingMoved() {
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

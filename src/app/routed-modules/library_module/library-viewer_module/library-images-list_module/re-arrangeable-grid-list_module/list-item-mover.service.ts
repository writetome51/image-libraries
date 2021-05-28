import { Injectable } from '@angular/core';
import { ItemBeingMoved } from '@interfaces/item-being-moved.interface';
import { moveByIndex } from '@writetome51/array-move-by-index';
import { Subject, Subscribable } from 'rxjs';


@Injectable()
export class ListItemMoverService {

	private __list: any[];
	private __subject = new Subject();
	private __indexBeingMoved: number;


	setList(value: any[]) {
		this.__list = value;
	}


	get itemBeingMoved$(): Subscribable<ItemBeingMoved> {
		return this.__subject;
	}


	set indexBeingMoved(value) {
		this.__indexBeingMoved = value;
	}


	get indexBeingMoved(): number {
		return this.__indexBeingMoved;
	}


	moveItemTo(newIndex): void {
		moveByIndex(this.__indexBeingMoved, newIndex, this.__list);

		this.__subject.next({
			indexBeingMoved: this.__indexBeingMoved,
			newIndex
		});
		this.__indexBeingMoved = -1;
	}

}

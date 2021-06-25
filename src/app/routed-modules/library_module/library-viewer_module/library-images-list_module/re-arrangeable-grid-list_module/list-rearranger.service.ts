import { Injectable } from '@angular/core';
import { moveByIndex } from '@writetome51/array-move-by-index';
import { Subject, Subscribable } from 'rxjs';
import { IndexBeingMovedData as indexBeingMoved } from './index-being-moved.data';
import { getArrayCopy } from '@writetome51/get-array-copy';
import { not } from '@writetome51/not';


@Injectable()
export class ListRearrangerService {

	private __list: any[];
	private __subject = new Subject();


	setList(value: any[]) {
		this.__list = value;
	}


	get rearrangedList$(): Subscribable<any[]> {
		return this.__subject;
	}


	moveItemTo(newIndex): void {
		this.__list = getArrayCopy(this.__list);
		moveByIndex(indexBeingMoved.data, newIndex, this.__list);

		this.__subject.next(this.__list);
		indexBeingMoved.data = -1;
	}

}

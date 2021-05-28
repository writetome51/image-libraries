import { Subject, Subscribable } from 'rxjs';
import { removeByIndex } from '@writetome51/array-remove-by-index';
import { Injectable } from '@angular/core';
import { ItemBeingRemoved } from '@interfaces/item-being-removed.interface';


@Injectable()
export class ListItemRemoverService {

	private __subject = new Subject();


	get itemBeingRemoved$(): Subscribable<ItemBeingRemoved> {
		return this.__subject;
	}


	remove(index): void {
		/******************
		let previousLength = loadedImages.data.length;
		removeByIndex(index, pageImages.data);

		this.__subject.next({indexBeingRemoved: index, previousLength});
		 *****************/
	}


}

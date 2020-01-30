import { Injectable } from '@angular/core';
import { ItemBeingMoved } from '../interfaces/item-being-moved';
import { Subject, Subscribable } from 'rxjs';
import { removeByIndex } from '@writetome51/array-remove-by-index';
import { ImagesToDisplayService } from './image/images-to-display.service';


@Injectable({providedIn: 'root'})

export class ListItemRemoverService {

	private __subject = new Subject();


	constructor(private __imagesToDisplay: ImagesToDisplayService) {
	}


	get subscribable(): Subscribable<ItemBeingMoved> {
		return this.__subject;
	}


	remove(index): void {
		removeByIndex(index, this.__imagesToDisplay.data);

		this.__subject.next({
			indexBeingMoved: this.__indexBeingMoved,
			newIndex
		});
	}


}

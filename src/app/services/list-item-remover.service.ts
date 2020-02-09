import { Injectable } from '@angular/core';
import { Subject, Subscribable } from 'rxjs';
import { removeByIndex } from '@writetome51/array-remove-by-index';
import { DisplayedImagesService } from './image/displayed-images.service';
import { HasSubscribable } from '../interfaces/has-subscribable';


@Injectable({providedIn: 'root'})

export class ListItemRemoverService implements HasSubscribable<any> {

	private __subject = new Subject();


	get subscribable(): Subscribable<{ indexBeingRemoved: number, previousLength: number }> {
		return this.__subject;
	}


	constructor(private __imagesToDisplay: DisplayedImagesService) {
	}


	remove(index): void {
		let previousLength = this.__imagesToDisplay.data.length;
		removeByIndex(index, this.__imagesToDisplay.data);

		this.__subject.next({indexBeingRemoved: index, previousLength});
	}


}

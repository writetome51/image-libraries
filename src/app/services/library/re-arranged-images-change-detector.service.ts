import { Injectable } from '@angular/core';
import { ItemBeingMoved } from '../../interfaces/item-being-moved';
import { ImagesToDisplayService } from '../image/images-to-display.service';
import { ListItemMoverService } from '../list-item-mover.service';
import { Subscription, Unsubscribable } from 'rxjs';


@Injectable({providedIn: 'root'})

export class ReArrangedImagesChangeDetectorService {

	subscription: Unsubscribable;


	constructor(
		private __imagesToDisplay: ImagesToDisplayService,
		private __listItemMover: ListItemMoverService
	) {
		this.subscription = this.__listItemMover.subscribable.subscribe(
			(imageBeingMoved: ItemBeingMoved) => {

			}
		);
	}


	getChanges(itemBeingMoved: ItemBeingMoved): object {
		let changes = {};


		return changes;
	}

}
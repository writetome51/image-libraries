import { Injectable } from '@angular/core';
import { ItemBeingMoved } from '../../interfaces/item-being-moved';
import { ImagesToDisplayService } from '../image/images-to-display.service';


@Injectable({providedIn: 'root'})

export class ReArrangedImagesChangeDetectorService {

	constructor(private __imagesToDisplay: ImagesToDisplayService) {
	}


	getChanges(itemBeingMoved: ItemBeingMoved): object {
		let changes = {};


		return changes;
	}

}

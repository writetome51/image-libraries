import { Component, Input } from '@angular/core';
import { ImageStoreService } from '../../../services/image-store.service';
import { errorIfNotInteger } from 'error-if-not-integer';
import { removeByIndex } from '@writetome51/array-remove-by-index';


@Component({
	selector: 'delete-image-button',
	template: `<span class="glyphicon glyphicon-remove-circle" (click)="deleteImage()"></span>`,
	styleUrls: ['./delete-image-button.component.css']
})
export class DeleteImageButtonComponent {

	private __index: number;


	constructor(private __imageStore: ImageStoreService) {

	}


	@Input() set index(value) {
		errorIfNotInteger(value);
		this.__index = value;
	}


	deleteImage() {
		removeByIndex(this.__index, this.__imageStore.images);
	}

}

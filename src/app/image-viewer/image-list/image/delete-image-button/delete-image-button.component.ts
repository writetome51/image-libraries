import { Component, Input } from '@angular/core';
import { errorIfNotInteger } from 'error-if-not-integer';
import { removeByIndex } from '@writetome51/array-remove-by-index';
import { LibraryService } from '../../../../services/library.service';


@Component({
	selector: 'delete-image-button',
	template: `<span class="glyphicon glyphicon-remove-circle" (click)="deleteImage()"></span>`,
	styleUrls: ['./delete-image-button.component.css']
})
export class DeleteImageButtonComponent {

	private __index: number;


	constructor(private __library: LibraryService) {

	}


	@Input() set index(value) {
		errorIfNotInteger(value);
		this.__index = value;
	}


	deleteImage() {
		removeByIndex(this.__index, this.__library.images);
	}

}

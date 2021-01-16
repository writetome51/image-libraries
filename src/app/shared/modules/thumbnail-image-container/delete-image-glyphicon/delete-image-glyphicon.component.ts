import { Component, Input } from '@angular/core';
import { DBImage } from '@interfaces/app-image/db-image';


@Component({
	selector: 'delete-image-glyphicon',
	template: `<span class="glyphicon glyphicon-remove-circle" (click)="deleteImage()"></span>`,
	styleUrls: ['./delete-image-glyphicon.component.css']
})
export class DeleteImageGlyphiconComponent {

	@Input() image: DBImage;


	constructor() {
	}


	async deleteImage(): Promise<void> {

	}

}

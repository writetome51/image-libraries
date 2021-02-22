import { Component, Input } from '@angular/core';
import { DBImage } from '@interfaces/db-image.interface';


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

import { Component, Input } from '@angular/core';
import { DBImage } from '../../../interfaces/db-image';


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
		// Whether to delete the image from the user account or to delete it from a
		// library depends on where the user is viewing it.  If viewing it from library,
		// delete it from that library.  If viewing from 'all-images' route, delete it
		// from account.
	}

}

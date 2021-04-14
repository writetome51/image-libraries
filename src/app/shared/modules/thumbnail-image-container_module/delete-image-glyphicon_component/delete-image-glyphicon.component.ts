import { Component, Input } from '@angular/core';
import { ImageRecord } from '@interfaces/image-record.interface';


@Component({
	selector: 'delete-image-glyphicon',
	template: `<span class="glyphicon glyphicon-remove-circle" (click)="deleteImage()"></span>`,
	styleUrls: ['./delete-image-glyphicon.component.css']
})
export class DeleteImageGlyphiconComponent {

	@Input() image: ImageRecord;


	constructor() {}


	async deleteImage(): Promise<void> {

	}

}

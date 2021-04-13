import { Component, Input } from '@angular/core';
import { ImageDBRecord } from '@interfaces/image-db-record.interface';


@Component({
	selector: 'delete-image-glyphicon',
	template: `<span class="glyphicon glyphicon-remove-circle" (click)="deleteImage()"></span>`,
	styleUrls: ['./delete-image-glyphicon.component.css']
})
export class DeleteImageGlyphiconComponent {

	@Input() image: ImageDBRecord;


	constructor() {}


	async deleteImage(): Promise<void> {

	}

}

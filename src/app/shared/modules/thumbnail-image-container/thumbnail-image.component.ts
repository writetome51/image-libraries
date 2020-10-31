import { Component, Input } from '@angular/core';
import { DBImage } from '@interfaces/db-image';
import { HTMLImage } from '@interfaces/html-image';
import { ThumbnailDisplaySettingsData as thumbnailDisplaySettings }
	from '@runtime-state-data/static-classes/auto-resettable.data';


@Component({
	selector: 'thumbnail-image',
	template: `
		<zoomable-html-image *ngIf="zoomEnabled" [data]="img"></zoomable-html-image>
		<html-image *ngIf="!(zoomEnabled)" [data]="img"></html-image>
	`
})
export class ThumbnailImageComponent {

	@Input() data: DBImage;
	@Input() zoomEnabled = false;


	get img(): HTMLImage {
		return {
			src: this.data.src,
			alt: this.data.description,
			width: thumbnailDisplaySettings.width,
			title: this.data.name
		};
	}

}

import { Component, Input } from '@angular/core';
import { DBImage } from '@interfaces/db-image';
import { ThumbnailDisplaySettingsData as thumbnailDisplaySettings }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { HTMLImage } from '@interfaces/html-image';


@Component({
	selector: 'thumbnail-image',
	template: `<app-image [data]="img"></app-image>`,
	styleUrls: ['./thumbnail-image.component.css']
})
export class ThumbnailImageComponent {

	@Input() data: DBImage;


	get img(): HTMLImage {
		return {
			src: this.data.src,
			alt: this.data.description,
			width: thumbnailDisplaySettings.width,
			title: this.data.name
		};
	}

}

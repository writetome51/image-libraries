import { Component, Input } from '@angular/core';
import { DBImage } from '@interfaces/db-image';
import { HTMLImage } from '@interfaces/html-image';
import { ThumbnailDisplaySettingsData as thumbnailDisplaySettings }
	from '@runtime-state-data/static-classes/auto-resettable.data';


@Component({
	selector: 'thumbnail-image',
	template: `<html-image [data]="img"></html-image>`,
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

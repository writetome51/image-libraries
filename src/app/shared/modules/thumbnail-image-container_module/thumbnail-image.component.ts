import { Component, Input } from '@angular/core';
import { ImageRecord } from '@interfaces/image-record.interface';
import { HTMLImage } from '@interfaces/html-image.interface';
import { ThumbnailDisplaySettingsData as thumbnailDisplaySettings }
	from '@runtime-state-data/static-classes/auto-resettable.data';


@Component({
	selector: 'thumbnail-image',
	template: `<html-image [data]="img"></html-image>`
})
export class ThumbnailImageComponent {

	@Input() data: ImageRecord;


	get img(): HTMLImage {
		return {
			src: this.data.src,
			alt: this.data.description,
			width: thumbnailDisplaySettings.width,
			title: this.data.name
		};
	}

}

import { Component } from '@angular/core';
import { HTMLImage } from '@interfaces/html-image.interface';
import { ThumbnailDisplaySettingsData as thumbnailDisplaySettings }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { AppImage } from '@interfaces/app-image.interface';
import { HasDataInputComponent } from '@abstract-components/has-data-input.abstract.component';


@Component({
	selector: 'thumbnail-image',
	template: `<html-image [data]="img"></html-image>`
})
export class ThumbnailImageComponent extends HasDataInputComponent<AppImage> {

	get img(): HTMLImage {
		return {
			src: this.data.src,
			alt: this.data.description,
			width: thumbnailDisplaySettings.width,
			title: this.data.name
		};
	}

}

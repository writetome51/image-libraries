import { Component, Input } from '@angular/core';
import { ImageRecord } from '@interfaces/image-record.interface';
import { ImageSelectorService } from '@services/image-selector.service';
import { not } from '@writetome51/not';
import { SelectMutipleImagesSettingService }
	from '@browser-storage/select-mutiple-images-setting.service';


@Component({
	selector: 'thumbnail-image-container',
	templateUrl: './thumbnail-image-container.component.html',
	styleUrls: ['./thumbnail-image-container.component.css']
})
export class ThumbnailImageContainerComponent {

	@Input() image: ImageRecord;
	@Input() imageRouterLink: (string[] | string) = [];
	@Input() deleteGlyphiconEnabled = false;


	get multiSelectEnabled(): boolean {
		return this.__selectMultipleImagesSetting.get().enabled;
	}


	constructor(
		private __selectMultipleImagesSetting: SelectMutipleImagesSettingService,
		private __imageSelector: ImageSelectorService
	) {}


	toggleSelect(): void {
		if (not(this.multiSelectEnabled)) return;
		this.__imageSelector.toggleSelect(this.image);
	}


	getRouterLink(): string[] | string {
		// if selectMultiple is enabled, the image has no routerLink.
		if (this.multiSelectEnabled) return [];
		else return this.imageRouterLink;
	}

}

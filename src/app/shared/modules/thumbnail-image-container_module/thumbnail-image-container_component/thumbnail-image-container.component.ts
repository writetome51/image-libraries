import { Component, Input } from '@angular/core';
import { ImageRecord } from '@interfaces/image-record.interface';
import { ImageSelectorService } from '@services/image-selector.service';
import { not } from '@writetome51/not';
import { EnableImageSelectionSettingService }
	from '@browser-storage/enable-image-selection-setting.service';


@Component({
	selector: 'thumbnail-image-container',
	templateUrl: './thumbnail-image-container.component.html',
	styleUrls: ['./thumbnail-image-container.component.css']
})
export class ThumbnailImageContainerComponent {

	@Input() image: ImageRecord;
	@Input() imageRouterLink: (string[] | string) = [];
	@Input() deleteGlyphiconEnabled = false;


	constructor(
		private __enableImageSelectionSetting: EnableImageSelectionSettingService,
		private __imageSelector: ImageSelectorService
	) {}


	toggleSelect(): void {
		if (not(this.__enableImageSelectionSetting.enabled)) return;
		this.__imageSelector.toggleSelect(this.image);
	}


	getRouterLink(): string[] | string {
		// if image selection is enabled, the image has no routerLink.
		if (this.__enableImageSelectionSetting.enabled) return [];
		else return this.imageRouterLink;
	}

}

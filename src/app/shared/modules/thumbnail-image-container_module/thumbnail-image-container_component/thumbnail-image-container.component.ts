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


	private get __imageSelectionEnabled(): boolean {
		return this.__enableImageSelectionSetting.get().enabled;
	}


	constructor(
		private __enableImageSelectionSetting: EnableImageSelectionSettingService,
		private __imageSelector: ImageSelectorService
	) {}


	toggleSelect(): void {
		if (not(this.__imageSelectionEnabled)) return;
		this.__imageSelector.toggleSelect(this.image);
	}


	getRouterLink(): string[] | string {
		// if selectMultiple is enabled, the image has no routerLink.
		if (this.__imageSelectionEnabled) return [];
		else return this.imageRouterLink;
	}

}

import { Component, Input } from '@angular/core';
import { ImageRecord } from '@interfaces/image-record.interface';
import { Hoverable } from '@interfaces/hoverable.interface';
import { HoverableContainerComponent }
	from '@hoverable-container_module/hoverable-container.component';
import { ImageSelectorService } from '@services/image-selector.service';
import { not } from '@writetome51/not';
import { SelectMutipleImagesSettingService }
	from '@browser-storage/select-mutiple-images-setting.service';


@Component({
	selector: 'thumbnail-image-container',
	templateUrl: './thumbnail-image-container.component.html',
	styleUrls: ['./thumbnail-image-container.component.css']
})
export class ThumbnailImageContainerComponent implements Hoverable {

	@Input() image: ImageRecord;
	@Input() imageRouterLink: (string[] | string) = [];
	@Input() deleteGlyphiconEnabled = false;


	get multiSelectEnabled(): boolean {
		let setting = this.__selectMultipleImagesSetting.get();
		return setting.enabled;
	}


	constructor(
		// if selectMultiple is enabled, hovering is disabled and the image has no routerLink.
		private __selectMultipleImagesSetting: SelectMutipleImagesSettingService,
		private __imageSelector: ImageSelectorService
	) {}


	isHovered(container: HoverableContainerComponent): boolean {
		let setting = this.__selectMultipleImagesSetting.get();
		return (setting.enabled ? false : container.isHovered());
	}


	toggleSelect(): void {
		if (not(this.multiSelectEnabled)) return;
		this.__imageSelector.toggleSelect(this.image);
	}


	getRouterLink(): string[] | string {
		if (this.multiSelectEnabled) return [];
		else return this.imageRouterLink;
	}

}

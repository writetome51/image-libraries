import { Component, Input } from '@angular/core';
import { DBImage } from '@interfaces/db-image.interface';
import { Hoverable } from '@interfaces/hoverable.interface';
import { HoverableContainerComponent } from '@app/shared/modules/hoverable-container_module/hoverable-container.component';
import { ImageSelectorService as imageSelector } from './image-selector.service';
import { not } from '@writetome51/not';
import { SelectMutipleImagesSettingService } // tslint:disable-next-line:max-line-length
	from '@services/browser-storage/select-mutiple-images-setting.service';


@Component({
	selector: 'thumbnail-image-container',
	templateUrl: './thumbnail-image-container.component.html',
	styleUrls: ['./thumbnail-image-container.component.css']
})
export class ThumbnailImageContainerComponent implements Hoverable {

	@Input() image: DBImage;
	@Input() imageRouterLink: (string[] | string) = [];
	@Input() deleteGlyphiconEnabled = false;


	get multiSelectEnabled(): boolean {
		let setting = this.__selectMultipleImagesSetting.get();
		return setting.enabled;
	}


	constructor(
		// if selectMultiple is enabled, hovering is disabled and the image has no routerLink.
		private __selectMultipleImagesSetting: SelectMutipleImagesSettingService) {
	}


	isHovered(container: HoverableContainerComponent): boolean {
		let setting = this.__selectMultipleImagesSetting.get();
		return (setting.enabled ? false : container.isHovered());
	}


	toggleSelect(): void {
		if (not(this.multiSelectEnabled)) return;
		imageSelector.toggleSelect(this.image);
	}


	getRouterLink(): string[] | string {
		if (this.multiSelectEnabled) return [];
		else return this.imageRouterLink;
	}

}

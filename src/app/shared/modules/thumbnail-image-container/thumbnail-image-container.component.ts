import { Component, Input } from '@angular/core';
import { DBImage } from '../../interfaces/db-image';
import { not } from '@writetome51/not';
import { ThumbnailDisplaySettingsData as thumbnailDisplaySettings }
	from '../../data/runtime-state/static-classes/resettable-to-default/thumbnail-display-settings.data';
import { ImageSelectorService as imageSelector } from './image-selector.service';


@Component({
	selector: 'thumbnail-image-container',
	templateUrl: './thumbnail-image-container.component.html',
	styleUrls: ['./thumbnail-image-container.component.css']
})
export class ThumbnailImageContainerComponent {

	@Input() image: DBImage;
	@Input() imageRouterLink: string[] | string = [];

	// if selectEnabled is true, hovering is disabled and the image has no routerLink.
	@Input() selectEnabled = false;

	// Only works if hovering is enabled.
	@Input() deleteGlyphiconEnabled = false;

	private __hovered = false;


	get imageWidth(): number {
		return thumbnailDisplaySettings.width;
	}


	hover() {
		if (not(this.selectEnabled)) this.__hovered = true;
	}


	unHover() {
		this.__hovered = false;
	}


	isHovered(): boolean {
		if (this.selectEnabled) return false;
		else return this.__hovered;
	}


	toggleSelect(): void {
		if (not(this.selectEnabled)) return;
		imageSelector.toggleSelect(this.image);
	}


	getRouterLink(): string[] | string {
		if (this.selectEnabled) return [];
		else return this.imageRouterLink;
	}


}

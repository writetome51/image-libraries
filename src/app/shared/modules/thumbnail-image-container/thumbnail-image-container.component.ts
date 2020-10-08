import { Component, Input } from '@angular/core';
import { DBImage } from '@interfaces/db-image';
import { HoverableComponent } from '@abstract-components/hoverable.component';
import { ImageSelectorService as imageSelector } from './image-selector.service';
import { not } from '@writetome51/not';
import { ThumbnailDisplaySettingsData as thumbnailDisplaySettings }
	from '@runtime-state-data/static-classes/auto-resettable.data';


@Component({
	selector: 'thumbnail-image-container',
	templateUrl: './thumbnail-image-container.component.html',
	styleUrls: ['./thumbnail-image-container.component.css']
})
export class ThumbnailImageContainerComponent extends HoverableComponent {

	@Input() image: DBImage;
	@Input() imageRouterLink: (string[] | string) = [];

	// if selectEnabled is true, hovering is disabled and the image has no routerLink.
	@Input() selectEnabled = false;

	// Only works if hovering is enabled.
	@Input() deleteGlyphiconEnabled = false;


	get imageWidth(): number {
		return thumbnailDisplaySettings.width;
	}


	hover() {
		if (not(this.selectEnabled)) super.hover();
	}


	isHovered(): boolean {
		return (this.selectEnabled ? false : super.isHovered());
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

import { Component, Input } from '@angular/core';
import { DBImage } from '../../interfaces/db-image';
import { ListItemRemoverService } from '../services/list-item-remover.service';
import { removeFirstOf } from '@writetome51/array-remove-all-of-first-of';
import { SelectedImagesDeleterService }
	// tslint:disable-next-line:max-line-length
	from '../services/data-transport-processor/delete-selected-images-processor/selected-images-deleter.service';
import { SelectedImageNamesData as selectedImageNames }
	from '../../data-structures/runtime-state-data/selected-image-names.data';
import { ThumbnailDisplaySettingsData as imageDisplaySettings }
	from '../../data-structures/runtime-state-data/static-classes/thumbnail-display-settings.data';


@Component({
	selector: 'thumbnail-image-container',
	templateUrl: './thumbnail-image-container.component.html',
	styleUrls: ['./thumbnail-image-container.component.css']
})
export class ThumbnailImageContainerComponent {

	@Input() image: DBImage;
	@Input() selectEnabled = false;
	selected = false;

	private __hovered = false;


	get imageWidth(): number {
		return imageDisplaySettings.width;
	}


	constructor(
		private __listItemRemover: ListItemRemoverService,
		private __selectedImagesDeleter: SelectedImagesDeleterService
	) {
	}


	hover() {
		if (!(this.selectEnabled)) this.__hovered = true;
	}


	unHover() {
		if (!(this.selectEnabled)) this.__hovered = false;
	}


	isHovered(): boolean {
		if (this.selectEnabled) return false;
		else return this.__hovered;
	}


	toggleSelect(): void {
		if (this.selectEnabled) {
			if (this.selected) this.unSelect();
			else this.select();
		}
	}


	select() {
		this.selected = true;
		selectedImageNames.data.push(this.image.name);
	}


	unSelect() {
		this.selected = false;
		removeFirstOf(this.image.name, selectedImageNames.data);
	}


	getRouterLink(): string[] {
		if (this.selectEnabled) return [];
	}


	async deleteImage(): Promise<void> {
		// Whether to delete the image from the user account or to delete it from a
		// library depends on where the user is viewing it.  If viewing it from library,
		// delete it from that library.  If viewing from 'all-images' route, delete it
		// from account.
	}

}

import { Component, Input } from '@angular/core';
import { DBImage } from '../../interfaces/db-image';
import { ThumbnailDisplaySettingsData as imageDisplaySettings }
	from '../../data-structures/runtime-state-data/static-classes/thumbnail-display-settings.data';
import { ListItemRemoverService } from '../services/list-item-remover.service';
import { SelectedImagesDeleterService }
	from '../services/data-transport-processor/delete-selected-images-processor/selected-images-deleter.service';
import { SelectedImageNamesData as selectedImageNames}
	from '../../data-structures/runtime-state-data/selected-image-names.data';


@Component({
	selector: 'thumbnail-image-container',
	templateUrl: './thumbnail-image-container.component.html',
	styleUrls: ['./thumbnail-image-container.component.css']
})
export class ThumbnailImageContainerComponent {

	@Input() image: DBImage;

	hovered = false;


	get imageWidth(): number {
		return imageDisplaySettings.width;
	}


	constructor(
		private __listItemRemover: ListItemRemoverService,
		private __selectedImagesDeleter: SelectedImagesDeleterService
	) {
	}


	async deleteImage() {
		// Whether to delete the image from the user account or to delete it from a
		// library depends on where the user is viewing it.  If viewing it from library,
		// delete it from that library.  If viewing from 'all-images' route, delete it
		// from account.
	}

}

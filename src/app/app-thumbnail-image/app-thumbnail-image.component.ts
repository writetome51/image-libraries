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
	selector: 'app-thumbnail-image',
	templateUrl: './app-thumbnail-image.component.html',
	styleUrls: ['./app-thumbnail-image.component.css']
})
export class AppThumbnailImageComponent {

	@Input() data: DBImage;

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
		selectedImageNames.data = [this.data.name];
		await this.__selectedImagesDeleter.delete();
	}

}

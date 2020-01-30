import { Component, Input } from '@angular/core';
import { AppImage } from '../../../../interfaces/app-image';
import { ImageDisplaySettingsData as imageDisplaySettings }
	from '../../../../data/image-display-settings.data';
import { ListItemRemoverService } from '../../../../services/list-item-remover.service';


@Component({
	selector: 'thumbnail-image',
	templateUrl: './thumbnail-image.component.html'
})
export class ThumbnailImageComponent {


	@Input() image: AppImage;
	@Input() index: number;
	hovered = false;


	get imageWidth(): number {
		return imageDisplaySettings.width;
	}


	get imageRoute(): string {
		return `image/${this.index}`;
	}


	constructor(private __listItemRemover: ListItemRemoverService) {
	}


	deleteImage() {
		this.__listItemRemover.remove(this.index);
	}


}

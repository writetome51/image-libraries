import { Component, Input } from '@angular/core';
import { DBImage } from '../interfaces/db-image';
import { ThumbnailDisplaySettingsData as imageDisplaySettings }
	from '../data/runtime-state-data/thumbnail-display-settings.data';
import { ListItemRemoverService } from '../services/list-item-remover.service';


@Component({
	selector: 'thumbnail-image',
	templateUrl: './thumbnail-image.component.html',
	styleUrls: ['./thumbnail-image.component.css']
})
export class ThumbnailImageComponent {

	@Input() data: DBImage;


	get imageWidth(): number {
		return imageDisplaySettings.width;
	}


	constructor(private __listItemRemover: ListItemRemoverService) {
	}

}

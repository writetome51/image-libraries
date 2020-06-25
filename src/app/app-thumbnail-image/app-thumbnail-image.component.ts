import { Component, Input } from '@angular/core';
import { DBImage } from '../../interfaces/db-image';
import { ThumbnailDisplaySettingsData as imageDisplaySettings }
	from '../../data-structures/runtime-state-data/static-classes/thumbnail-display-settings.data';
import { ListItemRemoverService } from '../services/list-item-remover.service';


@Component({
	selector: 'app-thumbnail-image',
	templateUrl: './app-thumbnail-image.component.html',
	styleUrls: ['./app-thumbnail-image.component.css']
})
export class AppThumbnailImageComponent {

	@Input() data: DBImage;


	get imageWidth(): number {
		return imageDisplaySettings.width;
	}


	constructor(private __listItemRemover: ListItemRemoverService) {
	}

}

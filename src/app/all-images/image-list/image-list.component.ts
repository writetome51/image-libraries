import { Component } from '@angular/core';
import { DBImage } from '../../../interfaces/db-image';
import { AllImagesPaginatorService } from '../../services/app-paginator/all-images-paginator.service';


@Component({
	selector: 'image-list',
	templateUrl: './image-list.component.html'
})
export class ImageListComponent {

	get images(): DBImage[] {
		// If the currentPage is undefined it triggers error, so we catch it:
		try {
			return this.allImagesPaginator.getCurrentPage();
		}
		catch (e) {
			return undefined;
		}
	}

	constructor(public allImagesPaginator: AllImagesPaginatorService) {
	}

}

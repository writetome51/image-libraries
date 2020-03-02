import { Component } from '@angular/core';
import { DBImage } from '../../../interfaces/db-image';
import { PaginatorService } from '../../../services/paginator/paginator.service';


@Component({
	selector: 'image-list',
	templateUrl: './image-list.component.html'
})
export class ImageListComponent {

	get images(): DBImage[] {
		return this.__paginator.currentPage;
	}


	constructor(private __paginator: PaginatorService) {
	}

}

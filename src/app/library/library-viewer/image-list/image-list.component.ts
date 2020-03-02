import { Component } from '@angular/core';
import { DBImage } from '../../../interfaces/db-image';
import { LibraryPaginatorService } from '../../../services/paginator/library-paginator.service';


@Component({
	selector: 'image-list',
	templateUrl: './image-list.component.html'
})
export class ImageListComponent {

	get images(): DBImage[] {
		return this.__libraryPaginator.currentPage;
	}


	getImageRoute(index): string {
		return `image/${index}`;
	}


	constructor(private __libraryPaginator: LibraryPaginatorService) {
	}

}

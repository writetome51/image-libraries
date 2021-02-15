import { Component } from '@angular/core';
import { CurrentRouteService } from '@services/current-route.service';
import { DBImage } from '@interfaces/app-image/db-image.interface';
import { LibraryPaginatorService }
	from '../../library-paginator/library-paginator.service';
import { ListItemRemoverService } from '@services/list-item-remover.service';
import { GetPageImagesService as getPageImages } from '@services/get-page-images.service';


@Component({
	selector: 'image-list',
	templateUrl: './image-list.component.html'
})
export class ImageListComponent {

	get images(): DBImage[] {
		return getPageImages.go(this.__libraryPaginator);
	}


	constructor(
		private __currentRoute: CurrentRouteService,
		private __libraryPaginator: LibraryPaginatorService,
		private __listItemRemover: ListItemRemoverService
	) {
	}

}

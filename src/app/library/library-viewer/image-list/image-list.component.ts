import { Component } from '@angular/core';
import { CurrentRouteService } from '@services/current-route.service';
import { DBImage } from '@interfaces/app-image/db-image';
import { LibraryPaginatorService }
	from '../../services/library-paginator/library-paginator.service';
import { ListItemRemoverService } from '@services/list-item-remover.service';
import { PageImagesData as pageImages }
	from '@runtime-state-data/static-classes/auto-resettable.data';


@Component({
	selector: 'image-list',
	templateUrl: './image-list.component.html'
})
export class ImageListComponent {

	get images(): DBImage[] {
		return this.__libraryPaginator.getCurrentPage();
	}


	constructor(
		private __currentRoute: CurrentRouteService,
		private __libraryPaginator: LibraryPaginatorService,
		private __listItemRemover: ListItemRemoverService
	) {
	}

}

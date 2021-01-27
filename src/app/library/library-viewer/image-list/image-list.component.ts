import { Component } from '@angular/core';
import { CurrentRouteService } from '@services/current-route.service';
import { DBImage } from '@interfaces/app-image/db-image.interface';
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
		try {
			// Caches reference to paginator's current page, which is emptied on logout.
			pageImages.data = this.__libraryPaginator.getCurrentPage();
			return pageImages.data;
		}
			// If the current page doesnt exist it triggers error, so we catch it:
		catch (e) {
			return undefined;
		}
	}


	constructor(
		private __currentRoute: CurrentRouteService,
		private __libraryPaginator: LibraryPaginatorService,
		private __listItemRemover: ListItemRemoverService
	) {
	}

}

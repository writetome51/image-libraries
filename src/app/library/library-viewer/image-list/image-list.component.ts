import { Component } from '@angular/core';
import { DBImage } from '../../../../interfaces/db-image';
import { LibraryPaginatorService } from '../../../services/paginator/library-paginator.service';
import { CurrentRouteService } from '../../../services/current-route.service';
import { URLParamIDData as paramID }
	from '../../../../data-structures/read-only-data/url-param-id.data';


@Component({
	selector: 'image-list',
	templateUrl: './image-list.component.html'
})
export class ImageListComponent {

	get images(): DBImage[] {
		return this.__libraryPaginator.currentPage;
	}


	get libName(): string {
		return this.__currentRoute.params[paramID.libName];
	}


	constructor(
		private __currentRoute: CurrentRouteService,
		private __libraryPaginator: LibraryPaginatorService
	) {
	}

}

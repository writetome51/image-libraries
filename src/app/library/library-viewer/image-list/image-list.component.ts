import { Component } from '@angular/core';
import { CurrentRouteService } from '../../../shared/services/current-route.service';
import { DBImage } from '../../../../interfaces/db-image';
import { LibraryPaginatorService } from '../../services/library-paginator/library-paginator.service';
import { ListItemRemoverService } from '../../../shared/services/list-item-remover.service';
import { PageImagesData as pageImages }	// tslint:disable-next-line:max-line-length
	from '../../../../data-structures/runtime-state-data/static-classes/resettable-to-default/page-images.data';


@Component({
	selector: 'image-list',
	templateUrl: './image-list.component.html'
})
export class ImageListComponent {

	get images(): DBImage[] {
		return pageImages.data;
	}


	constructor(
		private __currentRoute: CurrentRouteService,
		private __libraryPaginator: LibraryPaginatorService,
		private __listItemRemover: ListItemRemoverService
	) {
		pageImages.data = this.__libraryPaginator.getCurrentPage();
	}

}

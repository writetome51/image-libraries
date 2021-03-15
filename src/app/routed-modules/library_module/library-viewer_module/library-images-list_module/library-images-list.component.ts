import { Component } from '@angular/core';
import { CurrentRouteService } from '@services/current-route.service';
import { LibraryPaginatorService }
	from '../../library-paginator_service/library-paginator.service';
import { ListItemRemoverService } from './list-item-remover.service';
import { ImagesListComponent } from '@abstract-components/images-list.abstract.component';


@Component({
	selector: 'library-images-list',
	templateUrl: './library-images-list.component.html'
})
export class LibraryImagesListComponent extends ImagesListComponent {

	constructor(
		__paginator: LibraryPaginatorService,
		private __currentRoute: CurrentRouteService,
		private __listItemRemover: ListItemRemoverService
	) {
		super(__paginator);
	}

}

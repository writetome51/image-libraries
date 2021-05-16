import { Component } from '@angular/core';
import { CurrentRouteService } from '@services/current-route.service';
import { ImagesListComponent } from '@abstract-components/images-list.abstract.component';
import { LibraryPaginatorService } from '../../library-paginator_service/library-paginator.service';
import { ListItemRemoverService } from './list-item-remover.service';


@Component({
	selector: 'library-images-list',
	template: `
		<re-arrangeable-grid-list [data]="data">

			<re-arrangeable-grid-list-item *ngFor="let img of data; let i = index;" [index]="i">

				<thumbnail-image-container [image]="img"></thumbnail-image-container>

			</re-arrangeable-grid-list-item>

		</re-arrangeable-grid-list>
	`
})
export class LibraryImagesListComponent extends ImagesListComponent {

	constructor(
		__paginator: LibraryPaginatorService,
		private __currentRoute: CurrentRouteService,
		private __listItemRemover: ListItemRemoverService
	) {
		super();
	}

}

import { Component } from '@angular/core';
import { LibraryPaginatorService } from '../library-paginator_service/library-paginator.service';
import { LoadedLibraryImageTotalService }
	from '@services/library/loaded-library-image-total.service';
import { ImagesViewerContainerComponent } from '@abstract-components/images-viewer-container.abstract.component';
import { LibraryJumpToPageInputService }
	from '@app/routed-modules/library_module/library-jump-to-page-input.service';
import { RouteParamIDData as paramID } from '@read-only-data/route-param-id.data';


@Component({
	selector: 'library-viewer-container',
	template: `
		<div>
			<p *ngIf="(imageTotal === 0)">No images</p>

			<library-change-controls></library-change-controls>
			<delete-library-button></delete-library-button>

			<images-list-container *ngIf="imageTotal > 0"
				[paginator]="paginator"
				[routeBeforePageNumber]="routeBeforePageNumber"
				[jumpToPageInput]="jumpToPageInput"
			>
				<library-images-list></library-images-list>
			</images-list-container>
		</div>
	`
})
export class LibraryViewerContainerComponent extends ImagesViewerContainerComponent {

	routeBeforePageNumber = `/library/${paramID.libName}/page`;


	constructor(
		__storedImageTotal: LoadedLibraryImageTotalService,
		paginator: LibraryPaginatorService,
		jumpToPageInput: LibraryJumpToPageInputService
	) {
		super(__storedImageTotal, paginator, jumpToPageInput);
	}

}

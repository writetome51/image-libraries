import { AllImagesPaginatorService }
	from '../all-images-paginator_service/all-images-paginator.service';
import { AllImagesJumpToPageInputService } from '../all-images-jump-to-page-input.service';
import { AppModulePathData as appModulePath } from '@app/app-module-path.data';
import { Component } from '@angular/core';
import { HasImageTotalComponent }
	from '@abstract-components/has-image-total.abstract.component';
import { UserImageTotalInBrowserStorageService }
	from '@browser-storage/user-image-total-in-browser-storage.service';
import { ImagesViewerContainer } from '@interfaces/images-viewer-container.interface';


@Component({
	selector: 'all-images-viewer',
	template: `
		<p *ngIf="imageTotal === 0">You have no images in your account.</p>

		<images-viewer *ngIf="imageTotal > 0" [container]="this">
			<all-images-list></all-images-list>
		</images-viewer>
	`
})
export class AllImagesViewerComponent extends HasImageTotalComponent
	implements ImagesViewerContainer {

	routeBeforePageNumber = `${appModulePath.AllImagesModule}/page`;


	constructor(
		__storedImageTotal: UserImageTotalInBrowserStorageService,
		public paginator: AllImagesPaginatorService,
		public jumpToPageInput: AllImagesJumpToPageInputService
	) {
		super(__storedImageTotal);
	}

}

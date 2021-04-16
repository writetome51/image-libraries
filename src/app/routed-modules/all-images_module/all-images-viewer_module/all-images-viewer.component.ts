import { AllImagesPaginatorService }
	from '../all-images-paginator_service/all-images-paginator.service';
import { AllImagesJumpToPageInputService } from '../all-images-jump-to-page-input.service';
import { AppModulePathData as appModulePath } from '@app/app-module-path.data';
import { Component } from '@angular/core';
import { ImagesViewerComponent } from '@abstract-components/images-viewer.abstract.component';
import { UserImageTotalInBrowserStorageService }
	from '@browser-storage/user-image-total-in-browser-storage.service';


@Component({
	selector: 'all-images-viewer',
	template: `
		<p *ngIf="imageTotal === 0">You have no images in your account.</p>

		<images-list-container *ngIf="imageTotal > 0"
			[paginator]="paginator"
			[routeBeforePageNumber]="routeBeforePageNumber"
			[jumpToPageInput]="jumpToPageInput"
		>
			<all-images-list></all-images-list>
		</images-list-container>
	`
})
export class AllImagesViewerComponent extends ImagesViewerComponent {

	routeBeforePageNumber = `${appModulePath.AllImagesModule}/page`;


	constructor(
		__storedImageTotal: UserImageTotalInBrowserStorageService,
		paginator: AllImagesPaginatorService,
		jumpToPageInput: AllImagesJumpToPageInputService
	) {
		super(__storedImageTotal, paginator, jumpToPageInput);
	}

}

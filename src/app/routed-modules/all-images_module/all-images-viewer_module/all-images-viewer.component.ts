import { AllImagesPaginatorService }
	from '../all-images-paginator_service/all-images-paginator.service';
import { AllImagesJumpToPageInputService } from '../all-images-jump-to-page-input.service';
import { AppModulePathData as appModulePath } from '@app/app-module-path.data';
import { Component } from '@angular/core';
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
export class AllImagesViewerComponent {

	modulePath = appModulePath.AllImagesModule;
	routeBeforePageNumber = `${this.modulePath}/page`;


	get imageTotal(): number {
		return this.__userImageTotal.get();
	}


	constructor(
		private __userImageTotal: UserImageTotalInBrowserStorageService,
		public paginator: AllImagesPaginatorService,
		public jumpToPageInput: AllImagesJumpToPageInputService
	) {}

}

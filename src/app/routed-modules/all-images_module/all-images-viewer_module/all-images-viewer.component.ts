import { Component } from '@angular/core';
import { UserImageTotalInBrowserStorageService }
	from '@browser-storage/user-image-total-in-browser-storage.service';


@Component({
	selector: 'all-images-viewer',
	template: `
		<global-action-menu></global-action-menu>

		<ng-container *ngIf="imageTotal > 0">
			<image-size-slider></image-size-slider>
			<all-images-list></all-images-list>
		</ng-container>


		<all-images-pagination-controls></all-images-pagination-controls>
	`
})
export class AllImagesViewerComponent {

	get imageTotal(): number {
		return this.__userImageTotal.get();
	}


	constructor(private __userImageTotal: UserImageTotalInBrowserStorageService) {}

}

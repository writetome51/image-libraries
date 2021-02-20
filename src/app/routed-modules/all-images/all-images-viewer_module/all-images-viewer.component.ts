import { Component } from '@angular/core';


@Component({
	selector: 'all-images-viewer',
	template: `
		<global-action-menu></global-action-menu>

		<image-size-slider></image-size-slider>

		<image-list></image-list>

		<all-images-pagination-controls></all-images-pagination-controls>
	`
})
export class AllImagesViewerComponent {
}

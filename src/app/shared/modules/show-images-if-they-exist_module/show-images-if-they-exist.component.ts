import { Component, Input } from '@angular/core';
import { ImagesViewerContextComponent }
	from '@abstract-components/images-viewer-context.abstract.component';


@Component({
	selector: 'show-images-if-they-exist',
	template: `
		<div>
			<p *ngIf="container.imageTotal === 0">{{ noImagesMessage }}</p>

			<images-viewer *ngIf="container.imageTotal > 0" [container]="container">

				<ng-content></ng-content> <!--  images list  -->

			</images-viewer>
		</div>
	`
})
export class ShowImagesIfTheyExistComponent {

	@Input() container: ImagesViewerContextComponent;
	@Input() noImagesMessage = 'No Images';

}

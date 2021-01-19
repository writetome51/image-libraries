import { Component, Input } from '@angular/core';
import { HTMLImage } from '@interfaces/html-image.interface';


@Component({
	selector: 'html-image',
	template: `
		<!--  Setting draggable to false on img prevents a ghost-image from being dragged.  -->
		<img draggable="false" [src]="data.src" [alt]="data.alt" [width]="data.width"
			 [title]="data.title ? data.title: ''"
		/>
	`
})
export class HTMLImageComponent {

	@Input() data: HTMLImage;

}

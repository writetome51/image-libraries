import { Component, Input } from '@angular/core';
import { HTMLImage } from '@interfaces/html-image';


@Component({
	selector: 'app-image',
	template: `
		<!--  Setting draggable to false on img prevents a ghost-image from being dragged.  -->
		<img draggable="false" [src]="data.src" [alt]="data.alt" [width]="data.width"
			 [title]="data.title"
		/>
	`,
	styles: [`img {box-shadow: -4px -4px 10px 3px lightgray;}`]
})
export class AppImageComponent {

	@Input() data: HTMLImage;

}

import { Component, Input } from '@angular/core';
import { HTMLImage } from '@interfaces/html-image';


@Component({
	selector: 'html-image',
	template: `
		<!--  Setting draggable to false on img prevents a ghost-image from being dragged.  -->
		<img draggable="false" [src]="data.src" [alt]="data.alt" [width]="data.width"
			 [title]="data.title"
		/>
	`,
	styles: [`img {box-shadow: -2px -2px 10px 3px #dcdcdc;}`]
})
export class HTMLImageComponent {

	@Input() data: HTMLImage;

}

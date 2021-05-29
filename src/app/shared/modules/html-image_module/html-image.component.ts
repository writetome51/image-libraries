import { Component } from '@angular/core';
import { HTMLImage } from '@interfaces/html-image.interface';
import { HasDataInputDirective } from '@app/shared/abstract-directives/has-data-input.abstract.directive';


@Component({
	selector: 'html-image',
	template: `
		<!--  Setting draggable to false on img prevents a ghost-image from being dragged.  -->
		<img draggable="false" [src]="data.src" [alt]="data.alt" [width]="data.width"
			 [title]="data.title ? data.title: ''"
		/>
	`
})
export class HTMLImageComponent extends HasDataInputDirective<HTMLImage> {}

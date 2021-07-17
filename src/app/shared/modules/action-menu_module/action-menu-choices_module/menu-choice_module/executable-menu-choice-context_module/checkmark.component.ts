import { Component } from '@angular/core';
import { environment } from '@environments/environment';


@Component({
	selector: 'checkmark',
	template: `
		<div [style.display]="'inline-block'" [style.position]="'relative'"
			 [style.width]="image.width + 'px'"
			 [style.height]="image.height + 'px'"
			 [style.background-image]="'url(' + image.src + ')'"
			 [style.background-repeat]="'no-repeat'"
		></div>
	`
})
export class CheckmarkComponent {

	image = {
		src: environment.assets + 'checkmark.png',
		width: 20,
		height: 16,
	};

}

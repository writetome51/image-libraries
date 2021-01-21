import { Component } from '@angular/core';
import { environment } from '@environments/environment';


@Component({
	selector: 'checkmark',
	template: `
		<img [src]="checkmark.src" [width]="checkmark.width" [height]="checkmark.height"
			 [alt]="checkmark.alt"
		/>
	`
})
export class CheckmarkComponent {

	checkmark = {
		src: environment.assets + 'checkmark.png',
		width: 20,
		height: 16,
		alt: 'checkmark'
	};

}

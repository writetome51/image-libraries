import { Component } from '@angular/core';
import { environment } from '@environments/environment';
import { HTMLImage } from '@interfaces/html-image.interface';


@Component({
	selector: 'sprocket-wheel',
	template: `
		<div class="sprocket-wheel-container"
			 [style.display]="'inline-block'"
			 [style.position]="'relative'"
			 [style.width]="image.width + 'px'"
			 [style.height]="image.height + 'px'"
			 [style.background-image]="'url(' + image.src + ')'"
			 [style.background-repeat]="'no-repeat'"
		></div>
	`
})
export class SprocketWheelComponent {

	readonly image: HTMLImage = {
		src: environment.assets + 'sprocket-wheel-big.png',
		width: 18,
		height: 18,
		alt: 'sprocket wheel'
	};

}

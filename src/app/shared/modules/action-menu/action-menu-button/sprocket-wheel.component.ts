import { Component } from '@angular/core';
import { environment } from '@environments/environment';


@Component({
	selector: 'sprocket-wheel',
	template: `
		<img [src]="sprocket.src" [width]="sprocket.width"
			 [height]="sprocket.height" [alt]="sprocket.alt"
		/>
	`
})
export class SprocketWheelComponent {

	readonly sprocket = {
		src: environment.assets + 'sprocket-wheel.png',
		width: 11,
		height: 11,
		alt: 'action menu'
	};

}

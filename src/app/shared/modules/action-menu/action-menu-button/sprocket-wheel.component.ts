import { Component } from '@angular/core';
import { environment } from '@environments/environment';
import { HTMLImage } from '@interfaces/html-image';


@Component({
	selector: 'sprocket-wheel',
	template: `<html-image [data]="sprocket"></html-image>`
})
export class SprocketWheelComponent {

	readonly sprocket: HTMLImage = {
		src: environment.assets + 'sprocket-wheel.png',
		width: 11,
		alt: 'sprocket wheel'
	};

}

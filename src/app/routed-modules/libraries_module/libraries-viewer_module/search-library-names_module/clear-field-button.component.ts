import { Component } from '@angular/core';
import { environment } from '@environments/environment';


@Component({
	selector: 'clear-field-button',
	template: `<html-image [data]="image"></html-image>`
})
export class ClearFieldButtonComponent {

	image = {
		src: environment.assets + 'clear-field-button.png',
		width: 22,
		height: 18,
		alt: 'clear-field'
	};

}

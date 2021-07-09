import { Component } from '@angular/core';
import { environment } from '@environments/environment';
import { SearchData as search } from '@runtime-state-data/search.data';


@Component({
	selector: 'clear-field-button',
	template: `<html-image [data]="image" role="button" (click)="clearField()"></html-image>`
})
export class ClearFieldButtonComponent {

	image = {
		src: environment.assets + 'clear-field-button.png',
		width: 22,
		height: 18,
		alt: 'clear-field'
	};


	clearField() { search.text = ''; }

}

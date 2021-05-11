import { Component, Input } from '@angular/core';
import { SendFormData } from '@interfaces/send-form-data.interface';


@Component({
	selector: 'app-search',
	template: `
		<search-form-input></search-form-input>
		<submit-form-button [iDoThis]="iDoThis"></submit-form-button>
	`
})
export class SearchComponent {

	@Input() iDoThis: SendFormData;

}

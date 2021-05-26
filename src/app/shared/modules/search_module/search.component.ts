import { Component, Input } from '@angular/core';
import { IDoThis } from '@interfaces/i-do-this.interface';


@Component({
	selector: 'app-search',
	template: `
		<search-form-input></search-form-input>
		<submit-form-button [iDoThis]="iDoThis"></submit-form-button>
	`
})
export class SearchComponent {

	@Input() iDoThis: IDoThis;

}

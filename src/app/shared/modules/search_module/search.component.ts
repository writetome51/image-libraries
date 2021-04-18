import { Component, Input } from '@angular/core';
import { ProcessSendFormDataService }
	from '@process/process-send-form-data.abstract.service';


@Component({
	selector: 'app-search',
	template: `
		<search-form-input></search-form-input>
		<submit-form-button [iDoThis]="iDoThis"></submit-form-button>
	`
})
export class SearchComponent {

	@Input() iDoThis: ProcessSendFormDataService;

}

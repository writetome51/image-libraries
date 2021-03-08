import { Component, Input } from '@angular/core';
import { ProcessSendFormDataToDbService }
	from '@process/process-send-form-data-to-db.abstract.service';


@Component({
	selector: 'app-search',
	template: `
		<search-form-input></search-form-input>
		<submit-form-button [process]="processor"></submit-form-button>
	`
})
export class SearchComponent {

	@Input() processor: ProcessSendFormDataToDbService;

}

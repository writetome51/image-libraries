import { Component, Input } from '@angular/core';
import { ProcessService } from '@services/process/process.abstract.service';


@Component({
	selector: 'app-search',
	template: `
		<search-form-input></search-form-input>
		<submit-form-button [process]="processor"></submit-form-button>
	`
})
export class SearchComponent {

	@Input() processor: ProcessService;

}

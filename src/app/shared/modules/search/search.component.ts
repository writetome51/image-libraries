import { Component, Input } from '@angular/core';
import { ProcessorService } from '@services/processor-related/processor.abstract.service';


@Component({
	selector: 'app-search',
	template: `
		<search-form-input></search-form-input>
		<submit-form-button [processor]="processor"></submit-form-button>
	`
})
export class SearchComponent {

	@Input() processor: ProcessorService;

}

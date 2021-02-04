import { Component, Input } from '@angular/core';
import { SearchProcessorService } from '@search/search-processor/search-processor.service';


@Component({
	selector: 'app-search',
	template: `
		<search-form-input></search-form-input>
		<submit-form-button [processor]="processor"></submit-form-button>
	`
})
export class SearchComponent {

	@Input() processor: SearchProcessorService;

}

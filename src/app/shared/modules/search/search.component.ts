import { Component } from '@angular/core';
import { SearchProcessorService } from './search-processor/search-processor.service';


@Component({
	selector: 'app-search',
	template: `
		<header>Search</header>
		<search-form-input></search-form-input>
		<submit-form-button [processor]="processor"></submit-form-button>
	`
})
export class SearchComponent {

	constructor(public processor: SearchProcessorService) {
	}

}

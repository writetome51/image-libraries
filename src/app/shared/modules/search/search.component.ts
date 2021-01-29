import { Component, Input } from '@angular/core';
import { SearchProcessorService } from './search-processor/search-processor.service';
import { IDoThis } from '@interfaces/i-do-this.interface';


@Component({
	selector: 'app-search',
	template: `
		<header>Search</header>
		<search-form-input></search-form-input>
		<submit-form-button [processor]="processor"></submit-form-button>
	`
})
export class SearchComponent {

	@Input() set searcher(value: IDoThis) {
		this.processor.setSearcher(value);
	}


	constructor(public processor: SearchProcessorService) {
	}

}

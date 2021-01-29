import { Component, Input, OnInit } from '@angular/core';
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
export class SearchComponent implements OnInit {

	@Input() searcher: IDoThis;


	constructor(public processor: SearchProcessorService) {
	}


	ngOnInit() {
		this.processor.setSearcher(this.searcher);
	}

}

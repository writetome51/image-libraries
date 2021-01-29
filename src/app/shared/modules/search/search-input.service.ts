import { Injectable } from '@angular/core';
import { SearchData } from '@runtime-state-data/search.data';
import { ValidatingTextInputService } from '@writetome51/validating-inputs';


@Injectable({providedIn: 'root'})
export class SearchInputService extends ValidatingTextInputService {

	constructor() {
		super();

		this.data.id = 'search-input';
		this.data.objectToBind = SearchData;
		this.data.propertyToBind = 'text';
		this.data.label = 'Search';
		this.data.isValid = () => true;
	}

}

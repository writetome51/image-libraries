import { Injectable } from '@angular/core';
import { SearchData } from '@runtime-state-data/static-classes/auto-resettable.data';
import { ValidatingTextInputService } from '@writetome51/validating-inputs';


@Injectable({providedIn: 'root'})
export class ValidatingSearchInputService extends ValidatingTextInputService {

	constructor() {
		super();

		this.data.id = 'search-input';
		this.data.objectToBind = SearchData;
		this.data.propertyToBind = 'text';
		this.data.label = 'Search';
	}

}

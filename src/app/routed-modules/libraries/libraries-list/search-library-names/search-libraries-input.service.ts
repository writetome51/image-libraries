import { Injectable } from '@angular/core';
import { SearchInputService } from '@validating-input/search-input.service';


@Injectable({providedIn: 'root'})
export class SearchLibrariesInputService extends SearchInputService {

	constructor() {
		super();

		this.data.id = 'library-name-' + this.data.id;
		this.data.label += ' Library Names';
	}
}

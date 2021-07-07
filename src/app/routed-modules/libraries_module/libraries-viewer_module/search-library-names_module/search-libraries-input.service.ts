import { Injectable } from '@angular/core';
import { SearchInputService } from '@validating-input/search-input.service';
import { SearchLibraryNamesServicesModule } from './search-library-names-services.module';


@Injectable({providedIn: SearchLibraryNamesServicesModule})
export class SearchLibrariesInputService extends SearchInputService {

	constructor() {
		super();

		this.data.id = 'library-name-' + this.data.id;
		this.data.label += ' Library Names';
	}
}

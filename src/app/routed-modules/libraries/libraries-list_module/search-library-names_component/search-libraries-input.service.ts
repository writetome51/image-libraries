import { Injectable } from '@angular/core';
import { SearchInputService } from '@services/validating-input-related/search-input.service';
import { LibrariesListServicesModule } from '../libraries-list-services.module';


@Injectable({providedIn: LibrariesListServicesModule})
export class SearchLibrariesInputService extends SearchInputService {

	constructor() {
		super();

		this.data.id = 'library-name-' + this.data.id;
		this.data.label += ' Library Names';
	}
}

import { Injectable } from '@angular/core';
import { ValidatingSearchInputService } from '@validating-input/validating-search-input.service';
import { SearchLibraryNamesServicesModule } from './search-library-names-services.module';


@Injectable({providedIn: SearchLibraryNamesServicesModule})
export class ValidatingSearchLibrariesInputService extends ValidatingSearchInputService {

	constructor() {
		super();

		this.data.id = 'library-name-' + this.data.id;
		this.data.label += ' Library Names';
	}
}

import { Injectable } from '@angular/core';
import { SearchInputService } from '@validating-input/search-input.service';
import { LibrariesViewerServicesModule } from '../libraries-viewer-services.module';


@Injectable({providedIn: LibrariesViewerServicesModule})
export class SearchLibrariesInputService extends SearchInputService {

	constructor() {
		super();

		this.data.id = 'library-name-' + this.data.id;
		this.data.label += ' Library Names';
	}
}

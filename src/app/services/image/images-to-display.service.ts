import { Injectable } from '@angular/core';
import { LibraryChangesService as libraryChanges } from '../library/library-changes.service';
import { CurrentLibraryData as library } from '../../data/current-library.data';
import { AppImage } from '../../interfaces/app-image';
import { hasValue } from '@writetome51/has-value-no-value';


@Injectable({providedIn: 'root'})

export class ImagesToDisplayService {

	static get exist(): boolean {
		return this.data.length > 0;
	}


	static get data(): AppImage[] {
		if (libraryChanges.exist && libraryChanges.getChange('images')) {
			return libraryChanges.getChange('images');
		}
		else if (hasValue(library.data)) return library.data.images;
		else return [];
	}

}

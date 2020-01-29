import { Injectable } from '@angular/core';
import { LibraryChangesService as libraryChanges } from '../library/library-changes.service';
import { CurrentLibraryData as library } from '../../data/current-library.data';
import { AppImage } from '../../interfaces/app-image';
import { hasValue } from '@writetome51/has-value-no-value';
import { getMergedArrays } from '@writetome51/array-get-merged-arrays';


@Injectable({providedIn: 'root'})

export class ImagesToDisplayService {

	static get exist(): boolean {
		return this.data.length > 0;
	}


	static get data(): AppImage[] {
		if (libraryChanges.has('images')) {
			let newImages = libraryChanges.getNewImages();
			return getMergedArrays([library.data.images, newImages]);
		}
		else if (hasValue(library.data.images)) return library.data.images;
		else return [];
	}

}

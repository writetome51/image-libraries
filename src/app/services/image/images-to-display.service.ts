import { LibraryChangesService as libraryChanges } from '../library/library-changes.service';
import { CurrentLibraryData as library } from '../../data/current-library.data';
import { AppImage } from '../../interfaces/app-image';
import { hasValue } from '@writetome51/has-value-no-value';
import { getMergedArrays } from '@writetome51/array-get-merged-arrays';
import { from, Observable, Subscription } from 'rxjs';

// Where does the observable need to be created?
// Needs to be created in a service that handles execution of any changes made
// to the library.  Not necessarily in LibraryChangesService, but in a service
// that calls methods of LibraryChangesService.

export class ImagesToDisplayService {

	private static __data;
	private static __observable: Observable<any>;
	private static __subscription: Subscription;


	static get exist(): boolean {
		return this.data.length > 0;
	}


	static get subscription() {
		return this.__subscription;
	}


	// set this.__data and return it:

	static get data(): AppImage[] {
	//	if (!(this.__observable)) this.__observable = Observable.create();
		if (libraryChanges.has('images')) {
			let newImages = libraryChanges.getNewImages();
			this.__data = getMergedArrays([library.data.images, newImages]);
			return this.__data;
		}
		else if (hasValue(library.data.images)) return library.data.images;
		else return [];
	}

}

import {
	LibraryChangesService,
	LibraryChangesService as libraryChanges
} from '../library/library-changes.service';
import { CurrentLibraryData as library } from '../../data/current-library.data';
import { AppImage } from '../../interfaces/app-image';
import { hasValue, noValue } from '@writetome51/has-value-no-value';
import { getMergedArrays } from '@writetome51/array-get-merged-arrays';
import { from, Observable, Subscription } from 'rxjs';
import { Injectable } from '@angular/core';
import { getCopy } from '@writetome51/array-get-copy';

// Where does the observable need to be created?
// Needs to be created in a service that handles execution of any changes made
// to the library.  Not necessarily in LibraryChangesService, but in a service
// that calls methods of LibraryChangesService.

@Injectable({providedIn: 'root'})

export class ImagesToDisplayService {

	private __data: AppImage[];
	private __observable: Observable<any>;
	private __subscription: Subscription;


	get exist(): boolean {
		return this.data.length > 0;
	}


	get subscription() {
		return this.__subscription;
	}


	get data(): AppImage[] {
		if (noValue(this.__data)) this.__data = getCopy(library.data.images);

		return this.__data;
	}


	constructor(private __libraryChanges: LibraryChangesService) {
	}

}

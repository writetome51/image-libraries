import { hasValue } from '@writetome51/has-value-no-value';
import { Injectable } from '@angular/core';
import { LoadedLibrary } from '../../interfaces/loaded-library';
import { GetRequestedLibraryService } from './get-requested-library.service';
import { AppImage } from '../../interfaces/app-image';


@Injectable({providedIn: 'root'})

export class LoadedLibraryService {

	private __data;


	get data(): LoadedLibrary {
		return this.__data;
	}


	get images(): AppImage[] {
		return this.data.images;
	}


	constructor(private __getRequestedLibrary: GetRequestedLibraryService) {
	}


	async set_data(): Promise<void> {
		let result: LoadedLibrary | void = await this.__getRequestedLibrary.go();

		if (hasValue(result)) this.__data = result;
	}


	unset_data(): void {
		this.__data = undefined;
	}


	// propertyToChange can have dot-notation.

	setChange(propertyToChange, newValue): void {
		this.data.changes[propertyToChange] = newValue;
	}


	// propertyToUnset can have dot-notation.

	unsetChange(propertyToUnset) {
		delete this.data.changes[propertyToUnset];
	}

}

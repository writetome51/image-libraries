import { AppImage } from '../../interfaces/app-image';
import { DBLibrary } from '../../interfaces/db-library';
import { GetRequestedLibraryService } from './get-requested-library.service';
import { hasValue } from '@writetome51/has-value-no-value';
import { Injectable } from '@angular/core';
import { LoadedLibrary } from '../../interfaces/loaded-library';
import { modifyObject } from '@writetome51/modify-object';
import { SettableDataContainer } from '../../interfaces/settable-data-container';


@Injectable({providedIn: 'root'})

export class LoadedLibraryService implements SettableDataContainer {

	private __data;


	get data(): LoadedLibrary {
		return this.__data;
	}


	get images(): AppImage[] {
		return this.__data.images;
	}


	get hasChanges(): boolean {
		return (Object.keys(this.__data.changes).length > 0);
	}


	constructor(private __getRequestedLibrary: GetRequestedLibraryService) {
	}


	async set_data(): Promise<void> {

		let library: DBLibrary | void = await this.__getRequestedLibrary.go();

		if (hasValue(library)) {

			modifyObject(library, {
				currentImage: undefined, // image currently being viewed
				currentImageIndex: -1,
				changes: {}
			});

			this.__data = library;
		}
	}


	unset_data(): void {
		this.__data = undefined;
	}


	// propertyToChange can have dot-notation.

	setChange(propertyToChange, newValue): void {
		this.__data.changes[propertyToChange] = newValue;
	}


	// propertyToUnset can have dot-notation.

	unsetChange(propertyToUnset): void {
		delete this.__data.changes[propertyToUnset];
	}

}

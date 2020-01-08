import { AppImage } from '../../interfaces/app-image';
import { DBLibrary } from '../../interfaces/db-library';
import { GetRequestedLibraryService } from './get-requested-library.service';
import { hasValue } from '@writetome51/has-value-no-value';
import { Injectable } from '@angular/core';
import { LoadedLibrary } from '../../interfaces/loaded-library';
import { modifyObject } from '@writetome51/modify-object';
import { SettableDataContainerService } from '../settable-data-container.service';


@Injectable({providedIn: 'root'})

export class LoadedLibraryService extends SettableDataContainerService {


	get data(): LoadedLibrary {
		return this._data;
	}


	get images(): AppImage[] {
		return this._data.images;
	}


	get hasChanges(): boolean {
		return (Object.keys(this._data.changes).length > 0);
	}


	constructor(private __getRequestedLibrary: GetRequestedLibraryService) {
		super();
	}


	async set_data(): Promise<void> {

		let library: DBLibrary | void = await this.__getRequestedLibrary.go();

		if (hasValue(library)) {

			modifyObject(library, {
				currentImage: undefined, // image currently being viewed
				currentImageIndex: -1,
				changes: {}
			});

			this._data = library;
		}
	}


	// propertyToChange can have dot-notation.

	setChange(propertyToChange, newValue): void {
		this._data.changes[propertyToChange] = newValue;
	}


	// propertyToUnset can have dot-notation.

	unsetChange(propertyToUnset): void {
		delete this._data.changes[propertyToUnset];
	}

}

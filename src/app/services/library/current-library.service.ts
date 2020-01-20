import { AppImage } from '../../interfaces/app-image';
import { DBLibrary } from '../../interfaces/db-library';
import { Injectable } from '@angular/core';
import { LoadedLibrary } from '../../interfaces/loaded-library';
import { modifyObject } from '@writetome51/modify-object';
import { SettableDataContainerService } from '../settable-data-container.service';


@Injectable({providedIn: 'root'})

export class CurrentLibraryService extends SettableDataContainerService {


	get data(): LoadedLibrary {
		return this._data;
	}


	get name(): string {
		return this._data.name;
	}


	get images(): AppImage[] {
		return this._data.images;
	}


	get changes() {
		return this._data.changes;
	}


	get hasChanges(): boolean {
		return (Object.keys(this._data.changes).length > 0);
	}


	set_data(newValue: DBLibrary): void {
		modifyObject(newValue, {
			currentImage: undefined, // image currently being viewed
			currentImageIndex: -1,
			changes: {}
		});

		this._data = newValue;
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

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


	set_data(newValue: DBLibrary): void {
		modifyObject(newValue, {
			currentImage: undefined, // image currently being viewed
			currentImageIndex: -1
		});

		this._data = newValue;
	}



}

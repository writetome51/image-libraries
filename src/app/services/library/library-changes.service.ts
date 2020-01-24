import { Injectable } from '@angular/core';
import { CurrentLibraryService as library } from './current-library.service';


@Injectable({providedIn: 'root'})

export class LibraryChangesService {

	// Stores all changes.  Properties should be assigned as strings so they can include
	// dot-notation.

	private __data = {};


	get data() {
		return this.__data;
	}


	get exist(): boolean {
		return (Object.keys(this.__data).length > 0);
	}


	get libraryName(): string {
		return library.data.name;
	}


	// propertyToChange can have dot-notation.

	setChange(propertyToChange, newValue): void {
		this.__data[propertyToChange] = newValue;
	}


	// propertyToUnset can have dot-notation.

	unsetChange(propertyToUnset): void {
		delete this.__data[propertyToUnset];
	}


	unsetChanges(): void {
		this.__data = {};
	}

}

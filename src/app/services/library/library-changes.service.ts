import { Injectable } from '@angular/core';
import { CurrentLibraryData as library } from '../../data/current-library.data';


@Injectable({providedIn: 'root'})

export class LibraryChangesService {

	// Stores all changes.  Properties should be assigned as strings so they can include
	// dot-notation.

	private static __data = {};


	// property can have dot-notation.

	static getChange(property) {
		return this.__data[property];
	}


	static get exist(): boolean {
		return (Object.keys(this.__data).length > 0);
	}


	static get libraryName(): string {
		return library.data.name;
	}


	// propertyToChange can have dot-notation.

	static setChange(propertyToChange, newValue): void {
		this.__data[propertyToChange] = newValue;
	}


	// propertyToUnset can have dot-notation.

	static unsetChange(propertyToUnset): void {
		delete this.__data[propertyToUnset];
	}


	static unsetChanges(): void {
		this.__data = {};
	}

}

import { Injectable } from '@angular/core';
import { Unsubscribable } from 'rxjs';
import { hasValue } from '@writetome51/has-value-no-value';


@Injectable({providedIn: 'root'})
export class LibraryChangesService {

	// Stores all changes.  Properties should be assigned as strings so they can include
	// dot-notation.

	private __data = {};

	subscriptions: Unsubscribable[] = [];


	get exist(): boolean {
		return (Object.keys(this.__data).length > 0);
	}


	get(property){
		return this.__data[property];
	}


	getAll(): object {
		return this.__data;
	}


	has(property): boolean {
		return hasValue(this.__data[property]);
	}


	// propertyToChange can have dot-notation.

	set(propertyToChange, newValue): void {
		this.__data[propertyToChange] = newValue;
	}


	// propertyToUnset can have dot-notation.

	unset(propertyToUnset): void {
		delete this.__data[propertyToUnset];
	}


	unsetAll(): void {
		this.__data = {};
	}

}

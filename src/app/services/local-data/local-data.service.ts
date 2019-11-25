import { LocalStorageService } from './local-storage.service';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})

export abstract class LocalDataService {

	protected _key: string;


	constructor(private __localStorage: LocalStorageService) {
	}


	set(value): void {
		let keyValuePair = {};
		keyValuePair[this._key] = value;
		this.__localStorage.set(keyValuePair);
	}


	get() {
		return this.__localStorage.get(this._key);
	}


	remove(): void {
		this.__localStorage.removeKey(this._key);
	}

}

import { hasValue, noValue } from '@writetome51/has-value-no-value';
import { Injectable } from '@angular/core';
import { ObjectInLocalStorage } from '@writetome51/object-in-local-storage';
import { ecky } from '../special/.ecky';
import { SimpleCrypto } from 'simple-crypto-js';
// if above import doesn't work, try:  const SimpleCrypto = require("simple-crypto-js").default;


@Injectable({providedIn: 'root'})

// Stores all localStorage data in one object.
// Each piece of data must have its own key.
// All data is stored encrypted.  When retrieved it's automatically decrypted.

export class LocalStorageService {

	private __localObject = new ObjectInLocalStorage('image-libraries-current-user');
	private __cryptographer = new SimpleCrypto(ecky);


	constructor() {
		if (noValue(this.__localObject.get())) this.__localObject.set({});
	}


	set(keyValuePair: Object): void {
		let [key] = Object.keys(keyValuePair);
		keyValuePair[key] = this.__cryptographer.encrypt(keyValuePair[key]);
		this.__localObject.modify(keyValuePair);
	}


	get(key: string): any {
		let localObject = this.__localObject.get();
		if (hasValue(localObject[key])) {
			return this.__cryptographer.decrypt(localObject[key]);
		}
		else throw new Error(`Requested key is undefined`);
	}


	unsetKey(key: string): void {
		let localObject = this.__localObject.get();
		delete localObject[key];
		this.__localObject.set(localObject);
	}


	unsetAll(): void {
		this.__localObject.remove();
		this.__localObject.set({});
	}

}

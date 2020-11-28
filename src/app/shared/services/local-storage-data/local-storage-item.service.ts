import { ObjectInLocalStorage } from '@writetome51/object-in-local-storage';
import { ecky } from '@app/.special/.ecky';
import { SimpleCrypto } from 'simple-crypto-js';
import { hasValue } from '@writetome51/has-value-no-value';

// Each local storage item is stored as an object.
// For storing and retrieving, the value is automatically encrypted and decrypted,
// respectively.

export abstract class LocalStorageItemService {

	protected _key: string;
	private __cryptographer = new SimpleCrypto(ecky);
	private __localObject: ObjectInLocalStorage;


	constructor(localObjectKey) {
		this.__localObject = new ObjectInLocalStorage(localObjectKey);

		// If there is no local storage data, it triggers error.
		try {
			let obj = this.__localObject.get();
		}
		catch (e) {
			this.__localObject.set({});
		}
	}


	set(value): void {
		let keyValuePair = {};
		keyValuePair[this._key] = this.__cryptographer.encrypt(value);

		this.__localObject.modify(keyValuePair);
	}


	get(): any {
		let localObject = this.__localObject.get();
		if (hasValue(localObject[this._key])) {
			return this.__cryptographer.decrypt(localObject[this._key]);
		}
		else throw new Error(`Local Storage item is undefined`);
	}


	remove(): void {
		this.__localObject.remove();
	}

}

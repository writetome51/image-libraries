import { ItemInBrowserStorage } from '@writetome51/item-in-browser-storage';
import { ecky } from '@app/.special/.ecky';
import { SimpleCrypto } from 'simple-crypto-js';
import { hasValue } from '@writetome51/has-value-no-value';
import { DataContainer } from '@interfaces/data-container.interface';


export abstract class EncryptedItemInBrowserStorageService<T> extends ItemInBrowserStorage
	implements DataContainer<T> {

	private __cryptographer = new SimpleCrypto(ecky);


	constructor(
		__storage: Storage,
		__key: string, // the unique ID needed to access the stored item.
	) {
		super(__storage, __key);
	}


	set(value: T): void {
		// @ts-ignore
		value = this.__cryptographer.encrypt(value);
		super.set(value);
	}


	get(): T {
		let value = super.get();
		if (hasValue(value)) {
			// @ts-ignore
			return this.__cryptographer.decrypt(value);
		}
	}

}

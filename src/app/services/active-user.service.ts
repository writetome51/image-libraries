import { Injectable } from '@angular/core';
import { DataStorageService } from './data-storage.service';
import { ObjectInLocalStorage } from '@writetome51/object-in-local-storage';
import { lis } from '../../../.logged-in-secret';


@Injectable({
	providedIn: 'root'
})
export class ActiveUserService {

	password = '';
	email = '';

	private __stored = new ObjectInLocalStorage(
		'image-lib-user-zhfqaiok',
		{email: '', lis: ''}
	);


	constructor(private __dataStorage: DataStorageService) {
	}


	get loggedIn(): boolean {
		let stored = this.__stored.get();
		// @ts-ignore
		return (stored.lis === lis && stored.email === this.email);
	}


	login(): void {
		let observable = this.__dataStorage.getUser({email: this.email, password: this.password});
		let subscription = observable.subscribe((data) => {

			// If either email or password were incorrect, data will have error:
			if (data.error) throw new Error(data.error.message);

			if (this.email === data.email) this.__stored.set({email: this.email, lis: lis});

			subscription.unsubscribe();
		});
	}


	logout(): void {
		this.__stored.remove();
	}


}

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
	data: any; // all user data gotten from this.__dataStorage

	private __localStore = new ObjectInLocalStorage('image-lib-users-zhfqaiok', {});


	constructor(private __dataStorage: DataStorageService) {
	}


	get loggedIn(): boolean {
		return this.data.loggedIn;
	}


	async login() {
		this.data = undefined;
		await this.__set_data();
		if (this.data) this.__addEmptyUserto__localStore();
	}


	logout(): void {
		this.__localStore.remove();
	}


	private async __set_data() {
		await this.__dataStorage.updateUser(
			{email: this.email, password: this.password, propToUpdate:'loggedIn', newValue: true}
		);
		let observable = this.__dataStorage.getUser({email: this.email, password: this.password});
		let subscription = await observable.subscribe((data) => {

			// If either email or password were incorrect, data will have error:
			if (data.error) throw new Error(data.error.message);

			if (this.email === data.email) this.data = data;
			subscription.unsubscribe();
		});
	}


	private __addEmptyUserto__localStore() {
		let user = {};
		user[this.email] = {};
		this.__localStore.modify(user);
	}


}

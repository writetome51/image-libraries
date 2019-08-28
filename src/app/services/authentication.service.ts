import { Injectable } from '@angular/core';
import { DataStorageService } from './data-storage.service';
import { ObjectInLocalStorage } from '@writetome51/object-in-local-storage';
import { lis } from '../../../.logged-in-secret';
import { ActiveUserService } from './active-user.service';


@Injectable({
	providedIn: 'root'
})
export class AuthenticationService {


	constructor(
		private __dataStorage: DataStorageService,
		private __activeUser: ActiveUserService
		) {
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


}

import { Injectable } from '@angular/core';
import { ObjectInLocalStorage } from '@writetome51/object-in-local-storage';


@Injectable({
	providedIn: 'root'
})
export class ActiveUserService {

	password = '';
	email = '';
	data: any; // all user data gotten from database.

	private __localStore = new ObjectInLocalStorage('image-lib-users-zhfqaiok', {});


	private __addEmptyUserto__localStore() {
		let user = {};
		user[this.email] = {};
		this.__localStore.modify(user);
	}


}

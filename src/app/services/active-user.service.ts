import { Injectable } from '@angular/core';
import { DataStorageService } from './data-storage.service';
import { ObjectInLocalStorage } from '@writetome51/object-in-local-storage';
import { loggedInSecret } from '../../../.logged-in-secret';


@Injectable({
	providedIn: 'root'
})
export class ActiveUserService {

	password = '';
	email = '';
	stored = new ObjectInLocalStorage('image-lib-user-zhfqaiok', {});


	constructor(private __dataStorage: DataStorageService) {
	}


	get loggedIn(): boolean {
		// @ts-ignore
		return (this.stored.get().loggedInSecret === loggedInSecret);
	}


	login(): void {
	}


}

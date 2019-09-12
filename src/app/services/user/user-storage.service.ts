import { CurrentUserService } from './current-user.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SessionIDLocalStorageService } from '../authentication/session-id-local-storage.service';
import { UserRestAPIService } from './user-rest-api.service';


@Injectable({
	providedIn: 'root'
})
export class UserStorageService {


	constructor(
		private __userRestApi: UserRestAPIService,
		private __currentUser: CurrentUserService,
		private __sessionIDLocalStorage: SessionIDLocalStorageService
	) {
	}


	create(): Observable<any> {
		return this.__userRestApi.create({
			email: this.__currentUser.email,
			password: this.__currentUser.password,
			securityQuestion: this.__currentUser.securityQuestion
		});
	}


	delete(): Observable<any> {
		return this.__userRestApi.delete({
			email: this.__currentUser.email,
			password: this.__currentUser.password,
			sessionID: this.__sessionIDLocalStorage.get()
		});
	}


	get(): Observable<any> {
		return this.__userRestApi.get({sessionID: this.__sessionIDLocalStorage.get()});
	}


	updatePassword(): Observable<any> {
		return this.__userRestApi.updatePassword({
			email: this.__currentUser.email,
			password: this.__currentUser.password,
			newPassword: this.__currentUser.newPassword,
			sessionID: this.__sessionIDLocalStorage.get()
		});
	}


	updateEmail(): Observable<any> {
		return this.__userRestApi.updateEmail({
			email: this.__currentUser.email,
			password: this.__currentUser.password,
			newEmail: this.__currentUser.newEmail,
			sessionID: this.__sessionIDLocalStorage.get()
		});
	}


}

import { CurrentUserService } from './current-user.service';
import { Injectable } from '@angular/core';
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


	async create(): Promise<any> {
		return new Promise((returnData) => {

			let observable = this.__userRestApi.create({
				email: this.__currentUser.email,
				password: this.__currentUser.password,
				securityQuestion: this.__currentUser.securityQuestion
			});

			let subscription = observable.subscribe((result) => {
				returnData(result);
				subscription.unsubscribe();
			});
		});
	}


	async delete(): Promise<any> {
		return new Promise((returnData) => {

			let observable = this.__userRestApi.delete({
				email: this.__currentUser.email,
				password: this.__currentUser.password,
				sessionID: this.__sessionIDLocalStorage.get()
			});

			let subscription = observable.subscribe((result) => {
				returnData(result);
				subscription.unsubscribe();
			});
		});
	}


	async get(): Promise<any> {
		return new Promise((returnData) => {
			let observable = this.__userRestApi.get({sessionID: this.__sessionIDLocalStorage.get()});

			let subscription = observable.subscribe((result) => {
				returnData(result);
				subscription.unsubscribe();
			});
		});
	}


	async updatePassword(): Promise<any> {
		return new Promise((returnData) => {

			let observable = this.__userRestApi.updatePassword({
				email: this.__currentUser.email,
				password: this.__currentUser.password,
				newPassword: this.__currentUser.newPassword,
				sessionID: this.__sessionIDLocalStorage.get()
			});

			let subscription = observable.subscribe((result) => {
				returnData(result);
				subscription.unsubscribe();
			});
		});
	}


	async updateEmail(): Promise<any> {
		return new Promise((returnData) => {

			let observable = this.__userRestApi.updateEmail({
				email: this.__currentUser.email,
				password: this.__currentUser.password,
				newEmail: this.__currentUser.newEmail,
				sessionID: this.__sessionIDLocalStorage.get()
			});

			let subscription = observable.subscribe((result) => {
				returnData(result);
				subscription.unsubscribe();
			});
		});
	}


}

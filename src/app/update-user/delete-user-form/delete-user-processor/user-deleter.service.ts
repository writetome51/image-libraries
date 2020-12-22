import { CurrentUserData as currentUser } from '@runtime-state-data/static-classes/current-user.data';
import { Injectable } from '@angular/core';
import { UserStorageService } from '@services/user-storage.service';


@Injectable({providedIn: 'root'})
export class UserDeleterService {

	constructor(private __userStorage: UserStorageService) {
	}


	async delete(): Promise<{ success: true } | { error: { message: string } }> {
		return await this.__userStorage.delete(currentUser);
	}

}

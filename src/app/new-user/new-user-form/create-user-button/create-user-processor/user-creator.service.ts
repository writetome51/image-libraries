import { CurrentUserData as currentUser }
	from '../../../../../data-structures/runtime-state-data/static-classes/current-user.data';
import { Injectable } from '@angular/core';
import { UserStorageService } from '../../../../shared/services/user/user-storage.service';
import { DBUser } from '../../../../../interfaces/db-user';


@Injectable({providedIn: 'root'})

export class UserCreatorService {

	constructor(private __userStorage: UserStorageService) {
	}


	async create(): Promise<DBUser | { error: { message: string } }> {
		return await this.__userStorage.create(currentUser);
	}

}

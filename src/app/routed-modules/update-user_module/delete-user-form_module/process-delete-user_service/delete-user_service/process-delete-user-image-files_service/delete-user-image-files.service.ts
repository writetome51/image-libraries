import { IDoThis } from '@interfaces/i-do-this.interface';
import { Injectable } from '@angular/core';
import { HasError } from '@interfaces/has-error.interface';
import { UpdateUserServicesModule } from '../../../../update-user-services.module';
import { UserFileStorageService } from '@services/user-file-storage.service';


@Injectable({providedIn: UpdateUserServicesModule})
export class DeleteUserImageFilesService implements IDoThis {

	constructor(private __userFileStorage: UserFileStorageService) {}


	async go(email): Promise<{ success: true } | HasError> {
		return this.__userFileStorage.deleteUser(email);
	}

}

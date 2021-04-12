import { IDoThis } from '@interfaces/i-do-this.interface';
import { Injectable } from '@angular/core';
import { HasError } from '@interfaces/has-error.interface';
import { NewUserServicesModule } from '../../new-user-services.module';
import { ProcessCreateUserInDbService }
	from './process-create-user-in-db_service/process-create-user-in-db.service';
import { ProcessCreateUserFileFolderService }
	from './process-create-user-file-folder_service/process-create-user-file-folder.service';


@Injectable({providedIn: NewUserServicesModule})
export class CreateUserService implements IDoThis {

	constructor(
		private __processCreateUserInDb: ProcessCreateUserInDbService,
		private __processCreateUserFileFolder: ProcessCreateUserFileFolderService
	) {}


	async go() {
		await this.__processCreateUserInDb.go();
		await this.__processCreateUserFileFolder.go();
	}

}

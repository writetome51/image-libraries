import { IDoThis } from '@interfaces/i-do-this.interface';
import { Injectable } from '@angular/core';
import { UpdateUserServicesModule } from '../../../../update-user-services.module';


@Injectable({providedIn: UpdateUserServicesModule})
export class RunTasksAfterDeletingUserImageFilesService implements IDoThis {

	constructor() {}


	async go() {
	}

}

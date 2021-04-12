import { IDoThis } from '@interfaces/i-do-this.interface';
import { Injectable } from '@angular/core';
import { NewUserServicesModule } from '../../../../new-user-services.module';


@Injectable({providedIn: NewUserServicesModule})
export class RunTasksAfterCreatingUserFileFolderService implements IDoThis {

	constructor() {}


	async go(result: {success: true}) {
	}

}

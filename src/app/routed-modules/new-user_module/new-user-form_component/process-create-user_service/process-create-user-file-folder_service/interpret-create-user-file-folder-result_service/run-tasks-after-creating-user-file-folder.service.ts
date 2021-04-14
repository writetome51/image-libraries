import { IDoThis } from '@interfaces/i-do-this.interface';
import { Injectable } from '@angular/core';
import { NewUserServicesModule } from '../../../../new-user-services.module';
import { TemporaryUserData as temporaryUser } from '@runtime-state-data/temporary-user.data';


@Injectable({providedIn: NewUserServicesModule})
export class RunTasksAfterCreatingUserFileFolderService implements IDoThis {

	async go(result: {success: true}) {
		temporaryUser.data['fileFolderCreated'] = result.success;
	}

}

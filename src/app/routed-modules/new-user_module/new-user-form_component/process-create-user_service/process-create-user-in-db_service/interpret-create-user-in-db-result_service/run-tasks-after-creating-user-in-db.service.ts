import { UserRecord } from '@interfaces/user-record.interface';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { Injectable } from '@angular/core';
import { NewUserServicesModule } from '../../../../new-user-services.module';
import { TemporaryUserData as temporaryUser } from '@runtime-state-data/temporary-user.data';


@Injectable({providedIn: NewUserServicesModule})
export class RunTasksAfterCreatingUserInDbService implements IDoThis {

	async go(result: UserRecord) {
		// for security:
		delete result._id;
		delete result.password;
		delete result.securityQuestion;

		temporaryUser.data = result;
	}

}

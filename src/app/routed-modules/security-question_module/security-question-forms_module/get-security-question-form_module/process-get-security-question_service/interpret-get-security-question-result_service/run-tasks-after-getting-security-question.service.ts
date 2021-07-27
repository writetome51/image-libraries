import { Injectable } from '@angular/core';
import { CurrentUserFormInputsData as currentUserForm }
	from '@runtime-state-data/static-classes/current-user-form-inputs.data';
import { SecurityQuestionStatusData as questionStatus }
	from '@runtime-state-data/security-question-status.data';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { SecurityQuestionServicesModule } from '../../../../security-question-services.module';


@Injectable({providedIn: SecurityQuestionServicesModule})
export class RunTasksAfterGettingSecurityQuestionService implements IDoThis {

	async go(result: { question: string, answer: string }) {

		currentUserForm.question = result.question;
		questionStatus.received = true;
	}

}

import { Injectable } from '@angular/core';
import { CurrentUserFormData as currentUserForm }
	from '@runtime-state-data/static-classes/current-user-form.data';
import { SecurityQuestionStatusData as questionStatus }
	from '@runtime-state-data/security-question-status.data';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { SecurityQuestionServicesModule } from '../../../security-question-services.module';


@Injectable({providedIn: SecurityQuestionServicesModule})
export class RunTasksAfterGettingSecurityQuestionService implements IDoThis {

	async go(result: { question: string, answer: string }) {

		currentUserForm.question = result.question;
		questionStatus.received = true;
	}

}

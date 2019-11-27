import { Component } from '@angular/core';
import { PerformAppDataOperationService as performAppDataOperation }
	from '../../services/perform-app-data-operation.service';


@Component({
	selector: 'get-security-question-form',
	templateUrl: './get-security-question-form.component.html'
})
export class GetSecurityQuestionFormComponent {


	constructor() {
	}


	async getQuestion() {
		await performAppDataOperation.go();
	}


}

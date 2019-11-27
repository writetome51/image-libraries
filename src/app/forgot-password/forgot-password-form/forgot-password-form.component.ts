import { Component } from '@angular/core';
import { PerformAppDataOperationService as performAppDataOperation }
	from '../../services/perform-app-data-operation.service';
import { LoginBySecurityQuestionProcessorService }
	from '../../services/data-operation-processor/login-by-security-question-processor.service';


@Component({
	selector: 'forgot-password-form',
	templateUrl: './forgot-password-form.component.html'
})
export class ForgotPasswordFormComponent {


	constructor(private __loginBySecurityQuestionProcessor: LoginBySecurityQuestionProcessorService) {
	}


	async getQuestion() {
		await performAppDataOperation.go(this.__loginBySecurityQuestionProcessor);
	}


}

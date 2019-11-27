import { Component } from '@angular/core';
import { PerformDataOperationService as performDataOperation }
	from '../../services/perform-data-operation.service';
import { GetSecurityQuestionProcessorService }
	from '../../services/data-operation-processor/get-security-question-processor.service';


@Component({
	selector: 'get-security-question-form',
	templateUrl: './get-security-question-form.component.html'
})
export class GetSecurityQuestionFormComponent {

	constructor(private __getSecurityQuestionProcessor: GetSecurityQuestionProcessorService) {
	}


	async getQuestion() {
		await performDataOperation.go(this.__getSecurityQuestionProcessor);
	}

}

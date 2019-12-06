import { Component } from '@angular/core';
import { ClearFormOnInitAndAlertOnDestroyComponent }
	from '../../clear-form-on-init-and-alert-on-destroy.component';


@Component({
	selector: 'answer-security-question-form',
	template: `
		<answer-security-question-form-inputs></answer-security-question-form-inputs>
		<submit-answer-button></submit-answer-button>
	`
})
export class AnswerSecurityQuestionFormComponent extends ClearFormOnInitAndAlertOnDestroyComponent {
}

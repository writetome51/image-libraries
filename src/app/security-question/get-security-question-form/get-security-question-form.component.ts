import { Component } from '@angular/core';
import { ClearFormOnInitAndAlertOnDestroyComponent }
	from '../../clear-form-on-init-and-alert-on-destroy.component';


@Component({
	selector: 'get-security-question-form',
	template: `
		<get-security-question-form-inputs></get-security-question-form-inputs>
		<get-question-button></get-question-button>
	`
})
export class GetSecurityQuestionFormComponent extends ClearFormOnInitAndAlertOnDestroyComponent {
}

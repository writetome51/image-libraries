import { Component, Input } from '@angular/core';
import { CurrentUserFormInputsData }
	from '@runtime-state-data/static-classes/current-user-form-inputs.data';


@Component({
	selector: 'security-question-forms',
	template: `
		<div class="form-container">
			<form clearAlertsOnDestroy
				resetToDefaultOnInit [resettables]="[currentUserFormInputs]"
			>
				<get-security-question-form *ngIf="!(receivedQuestion)">
				</get-security-question-form>

				<answer-security-question-form *ngIf="receivedQuestion">
				</answer-security-question-form>
			</form>
		</div>
	`
})
export class SecurityQuestionFormsComponent {

	@Input() receivedQuestion = false;

	currentUserFormInputs = CurrentUserFormInputsData;

}

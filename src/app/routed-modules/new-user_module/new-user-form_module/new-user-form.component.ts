import { Component } from '@angular/core';
import { CurrentUserFormInputsData }
	from '@runtime-state-data/static-classes/current-user-form-inputs.data';


@Component({
	selector: 'new-user-form',
	template: `
		<div class="form-container">
			<form>
				<new-user-form-inputs
					resetToDefaultOnInit [data]="[currentUserFormInputs]"
				></new-user-form-inputs>

				<submit-new-user-form-button></submit-new-user-form-button>
			</form>
		</div>
	`
})
export class NewUserFormComponent {

	currentUserFormInputs = CurrentUserFormInputsData;

}

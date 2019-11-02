import { Component } from '@angular/core';
import { CurrentUserService } from '../../services/user/current-user.service';
import { ValidatingFormInputsComponent } from '../../validating-inputs/validating-form-inputs.component';
import { UpdateEmailFormInputsService } from '../../services/update-email-form-inputs.service';


@Component({
	selector: 'update-user-email-form-inputs',
	template: `
		<validating-inputs [inputs]="inputs"></validating-inputs>
	`
})
export class UpdateUserEmailFormInputsComponent extends ValidatingFormInputsComponent {


	constructor(
		__updateEmailFormInputs: UpdateEmailFormInputsService,
		private __currentUser: CurrentUserService,
	) {
		super(__updateEmailFormInputs);
	}


}

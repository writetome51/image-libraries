import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from '../../services/user/current-user.service';
import { ValidatingFormInputsComponent } from '../../validating-inputs/validating-form-inputs.component';
import { NewUserFormInputsService } from '../../services/new-user-form-inputs.service';


@Component({
	selector: 'new-user-form-inputs',
	template: `
		<validating-inputs [inputs]="inputs"></validating-inputs>
	`
})
export class NewUserFormInputsComponent extends ValidatingFormInputsComponent implements OnInit {


	constructor(
		__createUserFormInputs: NewUserFormInputsService,
		private __currentUser: CurrentUserService,
	) {
		super(__createUserFormInputs);
	}


	ngOnInit(): void {
		this.__currentUser.clearFormProperties();
	}


}

import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from '../../services/user/current-user.service';
import { ValidatingFormInputsComponent } from '../../validating-inputs/validating-form-inputs.component';
import { CreateUserFormInputsService } from '../../services/create-user-form-inputs.service';


@Component({
	selector: 'create-user-form-inputs',
	template: `
		<validating-inputs [inputs]="inputs"></validating-inputs>
	`
})
export class CreateUserFormInputsComponent extends ValidatingFormInputsComponent implements OnInit {


	constructor(
		private __createUserFormInputs: CreateUserFormInputsService,
		private __currentUser: CurrentUserService,
	) {
		super(__createUserFormInputs);
	}


	ngOnInit(): void {
		this.__currentUser.clearFormProperties();
	}


}

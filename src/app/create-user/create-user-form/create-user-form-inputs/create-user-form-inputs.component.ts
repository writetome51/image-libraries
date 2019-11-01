import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from '../../../services/user/current-user.service';
import { UserValidationRulesService } from '../../../services/user/user-validation-rules.service';
import { ValidatingInputsFormComponent } from '../../../validating-inputs/validating-inputs-form.component';


@Component({
	selector: 'create-user-form-inputs',
	templateUrl: './create-user-form-inputs.component.html'
})
export class CreateUserFormInputsComponent extends ValidatingInputsFormComponent implements OnInit {


	constructor(
		public currentUser: CurrentUserService,
		private __userValidationRules: UserValidationRulesService
	) {
		super();
	}


	ngOnInit(): void {
		this.currentUser.clearFormProperties();
	}


}

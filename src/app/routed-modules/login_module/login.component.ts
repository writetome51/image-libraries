import { AppModulePathData } from '@app/app-module-path.data';
import { Component } from '@angular/core';
import { GetPageTitleService as getPageTitle } from '@services/get-page-title.service';
import { Title } from '@angular/platform-browser';
import { CurrentUserFormInputsData } from '@runtime-state-data/static-classes/current-user-form-inputs.data';


@Component({
	selector: 'app-login',
	template: `
		<login-form clearAlertsOnDestroy
			clearFormOnInit [inputData]="[currentUserFormInputs]"
		></login-form>

		<p>Don't have an account?
			<a [routerLink]="modulePath.NewUserModule" routerLinkActive="active">
				Create Account
			</a>
		</p>

		<site-explanation></site-explanation>
	`
})
export class LoginComponent {

	modulePath = AppModulePathData;
	currentUserFormInputs = CurrentUserFormInputsData;


	constructor(title: Title) {
		title.setTitle(getPageTitle.go(['Sign In']));
	}

}

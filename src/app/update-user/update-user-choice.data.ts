import { UpdateUserEmailFormComponent }
	from './update-user-email-form/update-user-email-form.component';
import { UpdateUserPasswordFormComponent }
	from './update-user-password-form/update-user-password-form.component';
import { DeleteUserFormComponent } from './delete-user-form/delete-user-form.component';


export class UpdateUserChoiceData {

	static readonly email = {
		path: 'email', // router path
		linkText: 'Email',
		component: UpdateUserEmailFormComponent, // component to load when path is accessed
		heading: 'Email' // used for UpdateUserComponent.formHeading
	};
	static readonly password = {
		path: 'password',
		linkText: 'Password',
		component: UpdateUserPasswordFormComponent,
		heading: 'Password'
	};
	static readonly delete = {
		path: 'delete-account',
		linkText: 'Delete Account',
		component: DeleteUserFormComponent,
		heading: 'Self Destruct?'
	};

}

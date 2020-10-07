import { DeleteUserFormComponent } from './delete-user-form/delete-user-form.component';
import { UpdateEmailFormComponent }
	from './update-email-form/update-email-form.component';
import { UpdateUserPasswordFormComponent }
	from './update-user-password-form/update-user-password-form.component';


export class UpdateUserChoiceData {

	static readonly email = {
		path: 'email', // router path
		linkText: 'Email',
		component: UpdateEmailFormComponent, // component to load when path is accessed
		heading: 'Email'
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

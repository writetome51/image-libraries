import { UpdateUserEmailFormComponent } from './update-user-email-form/update-user-email-form.component';
import { UpdateUserPasswordFormComponent }
	from './update-user-password-form/update-user-password-form.component';
import { DeleteUserFormComponent } from './delete-user-form/delete-user-form.component';


export class UpdateUserChoicesMapService {

	static readonly choices = ['email','password','delete'];

	static readonly email = {
		path: 'email',
		component: UpdateUserEmailFormComponent,
		heading: 'Update Email'
	};
	static readonly password = {
		path: 'password',
		component: UpdateUserPasswordFormComponent,
		heading: 'Update Password'
	};
	static readonly delete = {
		path: 'delete-account',
		component: DeleteUserFormComponent,
		heading: 'Self Destruct?'
	};

}

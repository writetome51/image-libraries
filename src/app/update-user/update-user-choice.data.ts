import { DeleteUserFormComponent } from './delete-user-form/delete-user-form.component';
import { UpdateEmailFormComponent } from './update-email-form/update-email-form.component';
import { UpdateUserPasswordFormComponent }
	from './update-user-password-form/update-user-password-form.component';
import { SubcomponentLink } from '@interfaces/subcomponent-link';


export class UpdateUserChoiceData {

	static readonly email: SubcomponentLink = {
		path: 'email', // router path
		label: 'Email',
		component: UpdateEmailFormComponent, // component to load when path is accessed
		heading: 'Email'
	};

	static readonly password: SubcomponentLink = {
		path: 'password',
		label: 'Password',
		component: UpdateUserPasswordFormComponent,
		heading: 'Password'
	};

	static readonly delete: SubcomponentLink = {
		path: 'delete-account',
		label: 'Delete Account',
		component: DeleteUserFormComponent,
		heading: 'Self Destruct?'
	};

}

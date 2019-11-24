import { UpdateUserEmailFormComponent }
	from './update-user-email-form/update-user-email-form.component';
import { UpdateUserPasswordFormComponent }
	from './update-user-password-form/update-user-password-form.component';
import { DeleteUserFormComponent } from './delete-user-form/delete-user-form.component';


export const UpdateUserChoicesMapService = {

	email: {
		path: 'email', // router path
		linkText: 'Email',
		component: UpdateUserEmailFormComponent, // component to load when path is accessed
		heading: 'Update Email' // used for UpdateUserComponent.formHeading
	},
	password: {
		path: 'password',
		linkText: 'Password',
		component: UpdateUserPasswordFormComponent,
		heading: 'Update Password'
	},
	delete: {
		path: 'delete-account',
		linkText: 'Delete Account',
		component: DeleteUserFormComponent,
		heading: 'Self Destruct?'
	}

};

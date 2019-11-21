import { UpdateUserEmailFormComponent } from './update-user-email-form/update-user-email-form.component';
import { UpdateUserPasswordFormComponent }
	from './update-user-password-form/update-user-password-form.component';
import { DeleteUserFormComponent } from './delete-user-form/delete-user-form.component';


export const UpdateUserChoicesMapService = {

	email: {
		path: 'email',
		component: UpdateUserEmailFormComponent,
		heading: 'Update Email'
	},
	password: {
		path: 'password',
		component: UpdateUserPasswordFormComponent,
		heading: 'Update Password'
	},
	delete: {
		path: 'delete-account',
		component: DeleteUserFormComponent,
		heading: 'Self Destruct?'
	}

};

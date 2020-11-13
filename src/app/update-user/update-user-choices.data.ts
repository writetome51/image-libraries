import { DeleteUserFormComponent } from './delete-user-form/delete-user-form.component';
import { UpdateEmailFormComponent } from './update-email-form/update-email-form.component';
import { UpdateUserPasswordFormComponent }
	from './update-user-password-form/update-user-password-form.component';
import { VariableSubcomponent } from '@interfaces/variable-subcomponent';


export class UpdateUserChoicesData {

	static readonly data: VariableSubcomponent[] = [
		{
			link: {label: 'Email', path: 'email', component: UpdateEmailFormComponent},
			heading: 'Email'
		},

		{
			link: {label: 'Password', path: 'password', component: UpdateUserPasswordFormComponent},
			heading: 'Password'
		},

		{
			link: {
				label: 'Delete Account',
				path: 'delete-account',
				component: DeleteUserFormComponent
			},
			heading: 'Self Destruct?'
		}
	];

}

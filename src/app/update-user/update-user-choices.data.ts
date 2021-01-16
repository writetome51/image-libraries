import { DeleteUserFormComponent } from './delete-user-form/delete-user-form.component';
import { UpdateEmailFormComponent } from './update-email-form/update-email-form.component';
import { UpdatePasswordFormComponent }
	from './update-password-form/update-password-form.component';
import { LinkedTemplateWithHeading } from './linked-template-with-heading.interface';


export class UpdateUserChoicesData {

	static readonly data: LinkedTemplateWithHeading[] = [
		{
			link: {label: 'Email', path: 'email', component: UpdateEmailFormComponent},
			heading: 'Email'
		},

		{
			link: {label: 'Password', path: 'password', component: UpdatePasswordFormComponent},
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

import { DeleteUserFormModule } from './delete-user-form/delete-user-form.module';
import { LinkedTemplateWithHeading } from './linked-template-with-heading.interface';
import { UpdateEmailFormModule } from './update-email-form/update-email-form.module';
import { UpdatePasswordFormModule } from './update-password-form/update-password-form.module';


export class UpdateUserChoicesData {

	static readonly data: LinkedTemplateWithHeading[] = [
		{
			link: {label: 'Email', path: 'email', module: UpdateEmailFormModule},
			heading: 'Email'
		},

		{
			link: {label: 'Password', path: 'password', module: UpdatePasswordFormModule},
			heading: 'Password'
		},

		{
			link: {
				label: 'Delete Account',
				path: 'delete-account',
				module: DeleteUserFormModule
			},
			heading: 'Self Destruct?'
		}
	];

}

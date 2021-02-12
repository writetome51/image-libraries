import { LinkedTemplateWithHeading } from './linked-template-with-heading.interface';
import { UpdateEmailFormComponent }
	from './update-email-form/update-email-form.component';
import { UpdatePasswordFormComponent }
	from './update-password-form/update-password-form.component';
import { DeleteUserFormComponent } from './delete-user-form/delete-user-form.component';


export class UpdateUserChoiceData {

	static readonly UpdateEmailFormModule: LinkedTemplateWithHeading = {
		link: {label: 'Email', path: 'email', component: UpdateEmailFormComponent},
		heading: 'Email'
	};

	static readonly UpdatePasswordFormModule: LinkedTemplateWithHeading = {
		link: {label: 'Password', path: 'password', component: UpdatePasswordFormComponent},
		heading: 'Password'
	};

	static readonly DeleteUserFormModule: LinkedTemplateWithHeading = {
		link: {label: 'Delete Account', path: 'delete-account', component: DeleteUserFormComponent},
		heading: 'Self Destruct?'
	};

}

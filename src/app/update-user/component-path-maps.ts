import { UpdateUserEmailFormComponent } from './update-user-email-form/update-user-email-form.component';
import { UpdateUserPasswordFormComponent }
	from './update-user-password-form/update-user-password-form.component';
import { DeleteUserFormComponent } from './delete-user-form/delete-user-form.component';
import { ComponentPathMap } from './component-path-map.type';


export const componentPathMaps: {
	email: ComponentPathMap;
	password: ComponentPathMap;
	delete: ComponentPathMap;
} = {
	email: {path: 'email', component: UpdateUserEmailFormComponent},
	password: {path: 'password', component: UpdateUserPasswordFormComponent},
	delete: {path: 'delete-account', component: DeleteUserFormComponent}
};

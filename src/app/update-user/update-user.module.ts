import { AuthenticatedGuard } from '../guards/authenticated.guard';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UpdateUserComponent } from './update-user.component';
import { UpdateUserEmailComponent } from './update-user-email/update-user-email.component';
import { UpdateUserPasswordComponent } from './update-user-password/update-user-password.component';


@NgModule({
	declarations: [
		UpdateUserComponent,
		UpdateUserEmailComponent,
		UpdateUserPasswordComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		RouterModule.forChild([
			{
				path: '',
				component: UpdateUserComponent,
				canActivate: [AuthenticatedGuard],
				children: [
					{
						path: 'email',
						component: UpdateUserEmailComponent,
						// 'canActivate' means the guard decides if the component can be instantiated.
						canActivate: [AuthenticatedGuard]
					},

					{
						path: 'password',
						component: UpdateUserPasswordComponent,
						canActivate: [AuthenticatedGuard]
					},
				]
			},
		])
	]
})
export class UpdateUserModule {
}

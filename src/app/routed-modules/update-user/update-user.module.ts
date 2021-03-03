import { CommonModule } from '@angular/common';
import { DeleteUserFormModule } from './delete-user-form_module/delete-user-form.module';
import { FormsModule } from '@angular/forms';
import { NavigationLinksModule } from '@app/shared/modules/navigation-links_module/navigation-links.module';
import { NgModule } from '@angular/core';
import { UpdateUserComponent } from './update-user.component';
import { UpdateUserRoutingModule } from './update-user-routing.module';
import { UpdateEmailFormModule } from './update-email-form_module/update-email-form.module';
import { UpdatePasswordFormModule }
	from './update-password-form_module/update-password-form.module';
import { UpdateUserChoicesComponent } from './update-user-choices.component';
import { UpdateUserServicesModule } from './update-user-services.module';


@NgModule({
	declarations: [UpdateUserComponent, UpdateUserChoicesComponent],
	imports: [
		CommonModule,
		FormsModule,
		UpdateEmailFormModule,
		UpdatePasswordFormModule,
		DeleteUserFormModule,
		UpdateUserRoutingModule,
		NavigationLinksModule,
		UpdateUserServicesModule,
	]
})
export class UpdateUserModule {
}

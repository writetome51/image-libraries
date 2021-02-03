import { AuthenticatedGuard } from '@app/shared/guards/authenticated.guard';
import { LinkedTemplateWithHeading } from './linked-template-with-heading.interface';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateUserChoicesData as updateUserChoices } from './update-user-choices.data';
import { UpdateUserComponent } from './update-user.component';


const routes: Routes = [

	{	// This makes UpdateEmailFormModule the default route when this module loads.
		path: '',
		pathMatch: 'full',
		redirectTo: updateUserChoices.UpdateEmailFormModule.link.path
	},

	{
		path: '',
		component: UpdateUserComponent,
		canActivate: [AuthenticatedGuard],

		children: Object.values(updateUserChoices).map(
			(choice: LinkedTemplateWithHeading) => {
				return {
					path: choice.link.path,
					component: choice.link.component
				};
			}
		)
	}

];


@NgModule({
	imports: [
		RouterModule.forChild(
			routes,
			//	{enableTracing: true} // <-- debugging purposes only
		)
	],
	exports: [RouterModule]
})
export class UpdateUserRoutingModule {
}

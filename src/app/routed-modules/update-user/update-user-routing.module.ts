import { AuthenticatedGuard } from '@guards/authenticated.guard';
import { LinkedTemplateWithHeading } from './linked-template-with-heading.interface';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateUserChoiceData as updateUserChoice } from './update-user-choice.data';
import { UpdateUserComponent } from './update-user.component';


const routes: Routes = [

	{	// This makes UpdateEmailFormModule the default route when this module loads.
		path: '',
		pathMatch: 'full',
		redirectTo: updateUserChoice.UpdateEmailFormModule.link.path
	},

	{
		path: '',
		component: UpdateUserComponent,
		canActivate: [AuthenticatedGuard],

		children: Object.values(updateUserChoice).map(
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
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class UpdateUserRoutingModule {
}

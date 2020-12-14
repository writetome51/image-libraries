import { AuthenticatedGuard } from '@guards/authenticated.guard';
import { LinkedTemplateWithHeading } from './linked-template-with-heading';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateUserChoicesData as choices } from './update-user-choices.data';
import { UpdateUserComponent } from './update-user.component';


const routes: Routes = [

	{	// This makes the first choice the default route when this module loads.
		path: '',
		pathMatch: 'full',
		redirectTo: choices.data[0].link.path
	},

	{
		path: '',
		component: UpdateUserComponent,
		canActivate: [AuthenticatedGuard],
		children: choices.data.map((choice: LinkedTemplateWithHeading) => {
			return {
				path: choice.link.path,
				component: choice.link.component
			};
		})
	},

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

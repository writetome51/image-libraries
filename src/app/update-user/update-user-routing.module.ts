import { AuthenticatedGuard } from '../guards/authenticated.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateUserComponent } from './update-user.component';
import { componentPathMaps } from './component-path-maps';


const routes: Routes = [

	{	// This makes 'email' the default route when this module loads.
		path: '',
		pathMatch: 'full',
		redirectTo: 'email'
	},

	{
		path: '',
		component: UpdateUserComponent,
		canActivate: [AuthenticatedGuard],
		children: [
			{
				path: componentPathMaps.email.path,
				// @ts-ignore
				component: componentPathMaps.email.component
			},

			{
				path: componentPathMaps.password.path,
				// @ts-ignore
				component: componentPathMaps.password.component
			},

			{
				path: componentPathMaps.delete.path,
				// @ts-ignore
				component: componentPathMaps.delete.component
			},
		]
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

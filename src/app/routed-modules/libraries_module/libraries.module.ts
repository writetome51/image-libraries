import { AuthenticatedGuard } from '@guards/authenticated.guard';
import { ClearFormOnInitModule } from '@clear-form-on-init_module/clear-form-on-init.module';
import { ClearAlertsOnDestroyModule }
	from '@modules/clear-alerts-on-destroy_module/clear-alerts-on-destroy.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LibrariesComponent } from './libraries.component';
import { LibrariesListModule } from './libraries-list_module/libraries-list.module';
import { NewLibraryButtonComponent } from './new-library-button.component';
import { NewLibraryFormModule } from './new-library-form_module/new-library-form.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
	declarations: [
		LibrariesComponent,
		NewLibraryButtonComponent
	],
	imports: [
		CommonModule,
		ClearFormOnInitModule,
		ClearAlertsOnDestroyModule,
		FormsModule,
		LibrariesListModule,
		NewLibraryFormModule,
		RouterModule.forChild([
			{
				path: '',
				pathMatch: 'full',
				component: LibrariesComponent,
				canActivate: [AuthenticatedGuard]
			},

			{path: '**', redirectTo: ''}
		])
	]
})
export class LibrariesModule {}

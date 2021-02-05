import { AuthenticatedGuard } from '@app/shared/guards/authenticated.guard';
import { ClearFormOnInitModule } from '@clear-form-on-init/clear-form-on-init.module';
import { ClearAlertOnDestroyModule } from '@clear-alert-on-destroy/clear-alert-on-destroy.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LibrariesComponent } from './libraries.component';
import { LibrariesListModule } from '@app/libraries/libraries-list/libraries-list.module';
import { NewLibraryButtonComponent } from './new-library-button.component';
import { NewLibraryFormModule } from './new-library-form/new-library-form.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
	declarations: [
		LibrariesComponent,
		NewLibraryButtonComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		ClearFormOnInitModule,
		ClearAlertOnDestroyModule,
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
export class LibrariesModule {
}

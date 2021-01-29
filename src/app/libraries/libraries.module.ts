import { AuthenticatedGuard } from '@app/shared/guards/authenticated.guard';
import { BigLoadingSpinnerModule } from '@big-loading-spinner/big-loading-spinner.module';
import { CommonModule } from '@angular/common';
import { ClearFormOnInitModule } from '@clear-form-on-init/clear-form-on-init.module';
import { ClearAlertOnDestroyModule } from '@clear-alert-on-destroy/clear-alert-on-destroy.module';
import { FormsModule } from '@angular/forms';
import { LibrariesComponent } from './libraries.component';
import { LibrariesListComponent } from './libraries-list/libraries-list.component';
import { NgModule } from '@angular/core';
import { NewLibraryButtonComponent } from './new-library-button.component';
import { RouterModule } from '@angular/router';
import { NewLibraryFormModule } from './new-library-form/new-library-form.module';
import { SearchModule } from '@search/search.module';


@NgModule({
	declarations: [
		LibrariesComponent,
		LibrariesListComponent,
		NewLibraryButtonComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		SearchModule,
		BigLoadingSpinnerModule,
		ClearFormOnInitModule,
		ClearAlertOnDestroyModule,
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

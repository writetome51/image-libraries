import { AuthenticatedGuard } from '@guards/authenticated.guard';
import { ClearFormOnInitModule } from '@clear-form-on-init_module/clear-form-on-init.module';
import { ClearAlertsOnDestroyModule }
	from '@clear-alerts-on-destroy_module/clear-alerts-on-destroy.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LibrariesComponent } from './libraries.component';
import { LibraryNamesModule } from './library-names_module/library-names.module';
import { NewLibraryButtonComponent } from './new-library-button.component';
import { NewLibraryFormModule } from './new-library-form_module/new-library-form.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoadingContentSectionModule }
	from '@loading-content-section_module/loading-content-section.module';
import { LibrariesViewerComponent } from '@app/routed-modules/libraries_module/libraries-viewer.component';


@NgModule({
	declarations: [
		LibrariesComponent,
		LibrariesViewerComponent,
		NewLibraryButtonComponent
	],
	imports: [
		CommonModule,
		ClearFormOnInitModule,
		ClearAlertsOnDestroyModule,
		LoadingContentSectionModule,
		FormsModule,
		LibraryNamesModule,
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

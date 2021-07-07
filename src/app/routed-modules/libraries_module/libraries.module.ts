import { AuthenticatedGuard } from '@guards/authenticated.guard';
import { ClearAlertsOnDestroyModule }
	from '@clear-alerts-on-destroy_module/clear-alerts-on-destroy.module';
import { ClearFormOnInitModule } from '@clear-form-on-init_module/clear-form-on-init.module';
import { CommonModule } from '@angular/common';
import { LibrariesComponent } from './libraries.component';
import { LoadingContentSectionModule }
	from '@loading-content-section_module/loading-content-section.module';
import { LibrariesViewerModule } from './libraries-viewer_module/libraries-viewer.module';
import { NewLibraryButtonComponent } from './new-library-button.component';
import { NewLibraryFormModule } from './new-library-form_module/new-library-form.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
	declarations: [LibrariesComponent, NewLibraryButtonComponent],
	imports: [
		CommonModule,
		ClearAlertsOnDestroyModule,
		ClearFormOnInitModule,
		LoadingContentSectionModule,
		NewLibraryFormModule,
		LibrariesViewerModule,
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

import { AuthenticatedGuard } from '@guards/authenticated.guard';
import { ClearAlertsOnDestroyModule }
	from '@clear-alerts-on-destroy_module/clear-alerts-on-destroy.module';
import { CommonModule } from '@angular/common';
import { LibrariesComponent } from './libraries.component';
import { LoadingContentSectionModule }
	from '@loading-content-section_module/loading-content-section.module';
import { LibrariesViewerModule } from './libraries-viewer_module/libraries-viewer.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
	declarations: [LibrariesComponent],
	imports: [
		CommonModule,
		ClearAlertsOnDestroyModule,
		LoadingContentSectionModule,
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

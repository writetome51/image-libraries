import { CommonModule } from '@angular/common';
import { LoadingContentSectionModule } from '@modules/loading-content-section_module/loading-content-section.module';
import { LibraryComponent } from './library.component';
import { LibraryRoutingModule } from './library-routing.module';
import { LibraryViewerModule } from './library-viewer_module/library-viewer.module';
import { LibraryServicesModule } from './library-services.module';
import { NgModule } from '@angular/core';


@NgModule({
	declarations: [LibraryComponent],
	imports: [
		CommonModule,
		LoadingContentSectionModule,
		LibraryViewerModule,
		LibraryServicesModule,
		LibraryRoutingModule,
	]
})
export class LibraryModule {}

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { DataURLExtractorService } from './services/data-urlextractor.service';
import { FormsModule } from '@angular/forms';
import { ImageChooserComponent } from './image-chooser/image-chooser.component';
import { ImageProcessorService } from './services/image-processor.service';
import { ImageStoreService } from './services/image-store.service';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';
import { JSONFileSaverService } from './services/jsonfile-saver.service';
import { LibraryChooserComponent } from './library-chooser/library-chooser.component';
import { LibraryProcessorService } from './services/library-processor.service';
import { NgModule } from '@angular/core';
import { ReArrangeableListModule }
	from '../reusable-modules/re-arrangeable-list/re-arrangeable-list.module';


@NgModule({
	declarations: [
		AppComponent,
		ImageChooserComponent,
		ImageViewerComponent,
		LibraryChooserComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		ReArrangeableListModule
	],
	providers: [
		DataURLExtractorService, ImageProcessorService, ImageStoreService,
		JSONFileSaverService, LibraryProcessorService
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}

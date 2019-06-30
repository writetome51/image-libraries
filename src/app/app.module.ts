import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ImageChooserComponent } from './image-chooser/image-chooser.component';
import { ImagesProcessorService } from './services/images-processor.service';
import { ImageURLProcessorService } from './services/image-url-processor.service';
import { ImageStoreService } from './services/image-store.service';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { LibraryChooserComponent } from './library-chooser/library-chooser.component';
import { LibraryReaderService } from './services/library-reader.service';
import { LibrarySaverService } from './services/library-saver.service';
import { NgModule } from '@angular/core';
import { ReArrangeableListModule }
	from '../reusable-modules/re-arrangeable-list/re-arrangeable-list.module';
import { PageNotFoundComponent } from './page-not-found.component';


@NgModule({
	declarations: [
		AppComponent,
		ImageChooserComponent,
		ImageViewerComponent,
		IntroductionComponent,
		LibraryChooserComponent,
		PageNotFoundComponent
	],
	imports: [
		AppRoutingModule,
		BrowserModule,
		FormsModule,
		ReArrangeableListModule
	],
	providers: [
		ImagesProcessorService, ImageURLProcessorService, ImageStoreService,
		LibraryReaderService, LibrarySaverService
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}

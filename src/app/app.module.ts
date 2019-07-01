import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { DeleteImageButtonComponent }
	from './image-viewer/image-list/delete-image-button/delete-image-button.component';
import { FormsModule } from '@angular/forms';
import { ImageChooserComponent } from './image-chooser/image-chooser.component';
import { ImageListComponent } from './image-viewer/image-list/image-list.component';
import { ImagesProcessorService } from './services/images-processor.service';
import { ImageSizeSliderComponent } from './image-viewer/image-size-slider/image-size-slider.component';
import { ImageStoreService } from './services/image-store.service';
import { ImageURLProcessorService } from './services/image-url-processor.service';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { LibraryChooserComponent } from './library-chooser/library-chooser.component';
import { LibraryReaderService } from './services/library-reader.service';
import { LibrarySaverService } from './services/library-saver.service';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found.component';
import { ReArrangeableGridListModule }
	from '../reusable-modules/re-arrangeable-list/re-arrangeable-grid-list.module';
import { SaveChangesComponent } from './image-viewer/save-changes/save-changes.component';


@NgModule({
	declarations: [
		AppComponent,
		DeleteImageButtonComponent,
		ImageChooserComponent,
		ImageListComponent,
		ImageSizeSliderComponent,
		ImageViewerComponent,
		IntroductionComponent,
		LibraryChooserComponent,
		PageNotFoundComponent,
		SaveChangesComponent
	],
	imports: [
		AppRoutingModule,
		BrowserModule,
		FormsModule,
		ReArrangeableGridListModule
	],
	providers: [
		ImagesProcessorService, ImageURLProcessorService, ImageStoreService,
		LibraryReaderService, LibrarySaverService
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { DataURLExtractorService } from './services/data-urlextractor.service';
import { ImageProcessorService } from './services/image-processor.service';
import { ImageStoreService } from './services/image-store.service';
import { ImageUploaderComponent } from './image-uploader/image-uploader.component';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';
import { JSONFileSaverService } from './services/jsonfile-saver.service';
import { LibraryProcessorService } from './services/library-processor.service';
import { NgModule } from '@angular/core';
import { LibraryChooserComponent } from './library-chooser/library-chooser.component';


@NgModule({
    declarations: [
        AppComponent,
        ImageUploaderComponent,
        ImageViewerComponent,
        LibraryChooserComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [
        ImageProcessorService, ImageStoreService, DataURLExtractorService,
        JSONFileSaverService, LibraryProcessorService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

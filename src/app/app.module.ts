import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { DataURLExtractorService } from './services/data-urlextractor.service';
import { DragAndDropModule } from 'angular-draggable-droppable';
import { FormsModule } from '@angular/forms';
import { ImageProcessorService } from './services/image-processor.service';
import { ImageStoreService } from './services/image-store.service';
import { ImageChooserComponent } from './image-chooser/image-chooser.component';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';
import { JSONFileSaverService } from './services/jsonfile-saver.service';
import { LibraryChooserComponent } from './library-chooser/library-chooser.component';
import { LibraryProcessorService } from './services/library-processor.service';
import { NgModule } from '@angular/core';


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
        DragAndDropModule
    ],
    providers: [
        ImageProcessorService, ImageStoreService, DataURLExtractorService,
        JSONFileSaverService, LibraryProcessorService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

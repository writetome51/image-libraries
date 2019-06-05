import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { DataURLExtractorService } from './services/data-urlextractor.service';
// import { DragDropModule } from '@angular/cdk/drag-drop';
import { ImageProcessorService } from './services/image-processor.service';
import { ImageStoreService } from './services/image-store.service';
import { ImageChooserComponent } from './image-chooser/image-chooser.component';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';
import { JSONFileSaverService } from './services/jsonfile-saver.service';
import { LibraryChooserComponent } from './library-chooser/library-chooser.component';
import { LibraryProcessorService } from './services/library-processor.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DragAndDropListComponent } from './drag-and-drop-list/drag-and-drop-list.component';



@NgModule({
    declarations: [
        AppComponent,
        ImageChooserComponent,
        ImageViewerComponent,
        LibraryChooserComponent,
        DragAndDropListComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
    //	DragDropModule
    ],
    providers: [
        ImageProcessorService, ImageStoreService, DataURLExtractorService,
        JSONFileSaverService, LibraryProcessorService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

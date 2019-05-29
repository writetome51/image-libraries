import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { DataURLExtractorService } from './data-urlextractor.service';
import { ImageProcessorService } from './image-processor.service';
import { ImageStoreService } from './image-store.service';
import { ImageUploaderComponent } from './image-uploader/image-uploader.component';
import { JSONFileSaverService } from './jsonfile-saver.service';
import { NgModule } from '@angular/core';


@NgModule({
    declarations: [
        AppComponent,
        ImageUploaderComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [
        ImageProcessorService, ImageStoreService, DataURLExtractorService,
        JSONFileSaverService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

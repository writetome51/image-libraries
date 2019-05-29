import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ImageReaderService } from './image-reader.service';
import { ImageStoreService } from './image-store.service';
import { ImageUploaderComponent } from './image-uploader/image-uploader.component';
import { NgModule } from '@angular/core';
import { DataURLExtractorService } from './data-urlextractor.service';



@NgModule({
    declarations: [
        AppComponent,
        ImageUploaderComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [ImageReaderService, ImageStoreService, DataURLExtractorService],
    bootstrap: [AppComponent]
})
export class AppModule {
}

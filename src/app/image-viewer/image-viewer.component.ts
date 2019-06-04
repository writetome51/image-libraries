import { Component, OnInit } from '@angular/core';
import { ImageStoreService } from '../services/image-store.service';
import { JSONFileSaverService } from '../services/jsonfile-saver.service';
import { LibraryProcessorService } from '../services/library-processor.service';


@Component({
    selector: 'image-viewer',
    templateUrl: './image-viewer.component.html'
})
export class ImageViewerComponent {

    public description = '';
    private __optionsVisible = false;


    constructor(
        private __imageStore: ImageStoreService,
        private __jsonFileSaver: JSONFileSaverService,
        private __libraryProcessor: LibraryProcessorService
    ) {
    }


    get optionsVisible(): boolean {
        return this.__optionsVisible;
    }


    get doneProcessing(): boolean {
        return this.__libraryProcessor.doneProcessing;
    }


    get images(): any[] {
        return this.__imageStore.images;
    }


    saveChanges() {
        this.__jsonFileSaver.save();
    }


    showOptions() {
        this.__optionsVisible = true;
    }


    hideOptions() {
        this.__optionsVisible = false;
    }


}

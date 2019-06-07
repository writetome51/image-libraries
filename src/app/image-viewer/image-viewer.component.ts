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
    private __indexWithOptionsVisible = -1;


    constructor(
        private __imageStore: ImageStoreService,
        private __jsonFileSaver: JSONFileSaverService,
        private __libraryProcessor: LibraryProcessorService
    ) {
    }


    get indexWithOptionsVisible() {
        return this.__indexWithOptionsVisible;
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


    showOptions(index) {
        this.__indexWithOptionsVisible = index;
    }


    hideOptions() {
        this.__indexWithOptionsVisible = -1;
    }


}

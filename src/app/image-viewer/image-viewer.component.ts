import { Component, OnInit } from '@angular/core';
import { ImageStoreService } from '../services/image-store.service';
import { JSONFileSaverService } from '../services/jsonfile-saver.service';
import { LibraryProcessorService } from '../services/library-processor.service';


@Component({
    selector: 'image-viewer',
    templateUrl: './image-viewer.component.html'
})
export class ImageViewerComponent implements OnInit {

    constructor(
        private __imageStore: ImageStoreService,
        private __jsonFileSaver: JSONFileSaverService,
        private __libraryProcessor: LibraryProcessorService
    ) {
    }


    ngOnInit() {
    }


    get doneProcessing() {
        return this.__libraryProcessor.doneProcessing;
    }


    get images() {
        return this.__imageStore.images;
    }


    saveChanges() {

    }

}

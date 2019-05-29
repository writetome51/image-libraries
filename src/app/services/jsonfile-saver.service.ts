// @ts-ignore
const FileSaver = require('file-saver');
import { ImageProcessorService } from './image-processor.service';
import { ImageStoreService } from './image-store.service';
import { Injectable } from '@angular/core';
import { not } from '@writetome51/not';


@Injectable({
    providedIn: 'root'
})
export class JSONFileSaverService {

    constructor(
        private __imageStore: ImageStoreService,
        private __imageProcessor: ImageProcessorService
    ) {
    }


    save() {
        while (not(this.__imageProcessor.doneProcessing)) {
            // do nothing.
        }
        let dataToWrite = JSON.stringify(this.__imageStore.images);

        let f = new File([dataToWrite], 'image_library.json', {type: 'text/plain;charset=utf-8'});
        FileSaver.saveAs(f);
    }


}

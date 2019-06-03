// @ts-ignore
const FileSaver = require('file-saver');
import { getDateTimeID } from '@writetome51/get-date-time-id';
import { ImageProcessorService } from './image-processor.service';
import { ImageStoreService } from './image-store.service';
import { Injectable } from '@angular/core';
import { not } from '@writetome51/not';


@Injectable({
    providedIn: 'root'
})
export class JSONFileSaverService {

    private __fileNamePrefix = 'image-library-';
    private __extension = '.json';
    private __writeOptions = {type: 'text/plain;charset=utf-8'};


    constructor(
        private __imageStore: ImageStoreService,
        private __imageProcessor: ImageProcessorService
    ) {
    }


    save(): void {
        while (not(this.__imageProcessor.doneProcessing)) {
            // do nothing.
        }
        let txtToWrite = JSON.stringify(this.__imageStore.images);
        let fileName = (this.__fileNamePrefix + getDateTimeID() + this.__extension);

        let file = new File([txtToWrite], fileName, this.__writeOptions);
        FileSaver.saveAs(file);
    }


}

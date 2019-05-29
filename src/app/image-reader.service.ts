import { append } from '@writetome51/array-append-prepend';
import { DataURLExtractorService } from './data-urlextractor.service';
// @ts-ignore
const FileSaver = require('file-saver');
import { ImageStoreService } from './image-store.service';
import { Injectable } from '@angular/core';
import { notEmpty } from '@writetome51/is-empty-not-empty';
import { not } from '@writetome51/not';


@Injectable({
    providedIn: 'root'
})
export class ImageReaderService {

    public images: { name: '', src: '', description: ''}[] = [];
    public imagesReady = false;
    public doneReading = false;


    constructor(
        private __imageStoreSvc: ImageStoreService,
        private __dataURLExtractorSvc: DataURLExtractorService
    ) {
    }


    read(files: FileList) {
        if (notEmpty(files)) {
            this.images.length = 0;

            this.__dataURLExtractorSvc.extract(files);
            while (not(this.__dataURLExtractorSvc.doneExtracting)) {
                // be idle.
            }

            // this.set_srces_toDataURLs(files);

        }
    }


    set_srces_toDataURLs(files) {
        [].forEach.call(files, this.__doThis);
    }


    private __doThis(file, index, files) {

        this.images.push({name: '', src: '', description: ''});
        let lastIndex = this.images.length - 1;
        this.images[lastIndex].name = file.name;

        // @ts-ignore
        this.images[lastIndex].src = reader.result; // sets src to a data url.

        if (this.images.length === files.length) { // If finished reading each file...

            append(this.images, this.__imageStoreSvc.images);
            let dataToWrite = JSON.stringify(this.__imageStoreSvc.images);

            let f = new File([dataToWrite], 'image_library.txt', {type: 'text/plain;charset=utf-8'});
            FileSaver.saveAs(f);
        }

    }


}

import { append } from '@writetome51/array-append-prepend';
import { DataURLExtractorService } from './data-urlextractor.service';
// @ts-ignore
const FileSaver = require('file-saver');
import { ImageStoreService } from './image-store.service';
import { Injectable } from '@angular/core';
import { notEmpty } from '@writetome51/is-empty-not-empty';


@Injectable({
    providedIn: 'root'
})
export class ImageReaderService {

    public images: { name: '', src: '', description: '', caption: '' }[] = [];
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
            this.set_srces_toDataURLs(files);
        }
    }


    // Converts `file` to a data url, and assigns that to the 'src' property of `element`.
    // Does not modify file.

    set_srces_toDataURLs(files) {
        let self = this;

        [].forEach.call(files, doThis);


        function doThis(file) {
            self.images.push({name: '', src: '', description: '', caption: ''});
            let lastIndex = self.images.length - 1;
            self.images[lastIndex].name = file.name;


            // @ts-ignore
            self.images[lastIndex].src = reader.result; // sets src to a data url.

            if (self.images.length === files.length) { // If finished reading each file...

                append(self.images, self.__imageStoreSvc.images);
                let dataToWrite = JSON.stringify(self.__imageStoreSvc.images);

                let f = new File([dataToWrite], 'image_library.txt', {type: 'text/plain;charset=utf-8'});
                FileSaver.saveAs(f);
            }

        }
    }


}

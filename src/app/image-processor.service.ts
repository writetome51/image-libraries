import { append } from '@writetome51/array-append-prepend';
import { DataURLExtractorService } from './data-urlextractor.service';
import { ImageStoreService } from './image-store.service';
import { Injectable } from '@angular/core';
import { not } from '@writetome51/not';
import { notEmpty } from '@writetome51/is-empty-not-empty';


@Injectable({
    providedIn: 'root'
})
export class ImageProcessorService {


    public doneProcessing = false;
    private __images: { name: '', src: '', description: '' }[] = [];



    constructor(
        private __imageStore: ImageStoreService,
        private __dataURLExtractor: DataURLExtractorService
    ) {
    }


    process(files: FileList) {
        if (notEmpty(files)) {

            this.__dataURLExtractor.extract(files);
            while (not(this.__dataURLExtractor.doneExtracting)) {
                // do nothing.
            }
            this.__set_images(files);
        }
    }


    private __set_images(files: FileList) {
        this.__images = [];

        [].forEach.call(files, (file, index, files) => {
            this.__images.push({name: '', src: '', description: ''});

            this.__images[index].name = file.name;
            this.__images[index].src = this.__dataURLExtractor.dataURLs[index];

            if (this.__images.length === files.length) { // If finished reading each file...

                append(this.__images, this.__imageStore.images);
                this.doneProcessing = true;
            }
        });
    }


}

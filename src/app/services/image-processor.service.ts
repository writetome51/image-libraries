import { DataURLExtractorService } from './data-urlextractor.service';
import { ImageStoreService } from './image-store.service';
import { Injectable } from '@angular/core';
import { not } from '@writetome51/not';
import { notEmpty } from '@writetome51/is-empty-not-empty';


@Injectable({
    providedIn: 'root'
})
export class ImageProcessorService {


    private __doneProcessing = false;


    constructor(
        private __imageStore: ImageStoreService,
        private __dataURLExtractor: DataURLExtractorService
    ) {
    }


    get doneProcessing(): boolean {
        return this.__doneProcessing;
    }


    process(files: FileList): void {
        if (notEmpty(files)) {

            this.__dataURLExtractor.extract(files);
            while (not(this.__dataURLExtractor.doneExtracting)) {
                // do nothing.
            }
            this.__sendTo__imageStore(files);
        }
    }


    private __sendTo__imageStore(files: FileList) {

        [].forEach.call(files, (file, index) => {
            this.__addImageToStore(file, index);
        });
        this.__doneProcessing = true;
    }


    private __addImageToStore(file, index) {
        this.__imageStore.images.push({name: '', src: '', description: ''});

        this.__imageStore.images[index].name = file.name;
        this.__imageStore.images[index].src = this.__dataURLExtractor.dataURLs[index];
    }


}

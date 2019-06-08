import { DataURLExtractorService } from './data-urlextractor.service';
import { ImageStoreService } from './image-store.service';
import { Injectable } from '@angular/core';
import { not } from '@writetome51/not';
import { notEmpty } from '@writetome51/is-empty-not-empty';


@Injectable({
    providedIn: 'root'
})
export class ImageProcessorService {


    private __doneProcessing = true;


    constructor(
        private __imageStore: ImageStoreService,
        private __dataURLExtractor: DataURLExtractorService
    ) {
    }


    get doneProcessing(): boolean {
        return this.__doneProcessing;
    }


    process(files: FileList): void {
        this.__doneProcessing = false;

        if (notEmpty(files)) {

            this.__dataURLExtractor.extract(files);
            while (not(this.__dataURLExtractor.doneExtracting)) {
                // The extraction is asynchronous process, so we must wait.
            }
            this.__sendTo__imageStore(files, this.__dataURLExtractor.dataURLs);
        }
        this.__doneProcessing = true;
    }


    private __sendTo__imageStore(files: FileList, dataURLs) {

        [].forEach.call(files, (file, index) => {
            this.__addImageToStore(file, dataURLs[index]);
        });
    }


    private __addImageToStore(file, dataURL) {
        let image = {name: '', src: '', description: ''};

        image.name = file.name;
        image.src = dataURL;
        this.__imageStore.images.push(image);
    }


}

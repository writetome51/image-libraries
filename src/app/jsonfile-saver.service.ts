import { ImageStoreService } from './image-store.service';
// @ts-ignore
const FileSaver = require('file-saver');
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class JSONFileSaverService {

    constructor(private __imageStore: ImageStoreService) {
    }


    save() {
        let dataToWrite = JSON.stringify(this.__imageStore.images);

        let f = new File([dataToWrite], 'image_library.json', {type: 'text/plain;charset=utf-8'});
        FileSaver.saveAs(f);
    }


}

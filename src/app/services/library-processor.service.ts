import { getObjectFromJSON } from 'get-object-from-json';
import { Injectable } from '@angular/core';
import { ImageStoreService } from './image-store.service';


@Injectable({
    providedIn: 'root'
})
export class LibraryProcessorService {


    public doneProcessing = false;


    constructor(private __imageStore: ImageStoreService) {
    }


    process(library: File) {
        const reader = new FileReader();

        reader.onload = () => {
            let json: any = reader.result;
            this.__imageStore.images = getObjectFromJSON(json);
            this.doneProcessing = true;
        };

        reader.readAsText(library, 'utf-8');
    }


}

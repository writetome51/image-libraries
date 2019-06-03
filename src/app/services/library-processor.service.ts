import { getObjectFromJSON } from 'get-object-from-json';
import { Injectable } from '@angular/core';
import { ImageStoreService } from './image-store.service';


@Injectable({
    providedIn: 'root'
})
export class LibraryProcessorService {


    private __doneProcessing = false;


    constructor(private __imageStore: ImageStoreService) {
    }


    get doneProcessing(): boolean {
        return this.__doneProcessing;
    }


    process(library: File): void {
        const reader = new FileReader();

        reader.onload = () => {
            let json: any = reader.result;
            this.__imageStore.images = getObjectFromJSON(json);
            this.__doneProcessing = true;
        };

        reader.readAsText(library, 'utf-8');
    }


}

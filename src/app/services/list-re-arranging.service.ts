import { getObjectFromJSON } from 'get-object-from-json';
import { Injectable } from '@angular/core';
import { ImageStoreService } from './image-store.service';
import { moveByIndex } from '@writetome51/array-move-by-index';


@Injectable({
    providedIn: 'root'
})
export class ListReArrangingService {


    indexBeingDragged: number;


    constructor(private __imageStore: ImageStoreService) {
    }


    reorder(newIndex) {
        moveByIndex(this.indexBeingDragged, newIndex, this.__imageStore.images);
        this.indexBeingDragged = -1;
    }


}

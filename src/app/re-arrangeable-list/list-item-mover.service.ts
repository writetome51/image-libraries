import { Injectable } from '@angular/core';
import { moveByIndex } from '@writetome51/array-move-by-index';
import { errorIfNotInteger } from 'error-if-not-integer';
import { PublicArrayContainer } from '@writetome51/public-array-container';


@Injectable({
    providedIn: 'root'
})
export class ListItemMoverService extends PublicArrayContainer {


    private __indexBeingMoved: number;


    set indexBeingMoved(value) {
        errorIfNotInteger(value);
        this.__indexBeingMoved = value;
    }


    get indexBeingMoved() {
        return this.__indexBeingMoved;
    }


    moveItemTo(newIndex) {
        moveByIndex(this.indexBeingMoved, newIndex, this.data);
    }


}

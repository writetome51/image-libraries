import { Injectable } from '@angular/core';
import { moveByIndex } from '@writetome51/array-move-by-index';


@Injectable({
    providedIn: 'root'
})
export class ListItemMoverService {


    indexBeingMoved: number;
    list: any[];


    moveItemTo(newIndex) {
        moveByIndex(this.indexBeingMoved, newIndex, this.list);
        this.indexBeingMoved = -1;
    }


}

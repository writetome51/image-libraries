import { Component, OnInit } from '@angular/core';
import { moveByIndex } from '@writetome51/array-move-by-index';


@Component({
    selector: 'drag-and-drop-list',
    templateUrl: './drag-and-drop-list.component.html',
    styleUrls: ['./drag-and-drop-list.component.css']
})
export class DragAndDropListComponent {


    list = ['coffee', 'beer', 'soda', 'water', 'tea', 'milk'];
    indexBeingDragged: number;
    rowDraggedOver: number;
    rowShiftDown: number;
    rowShiftUp: number;
    droppedData: string;


    dragEnd(event) {
        /******************
         `event` is object:
         {
             x: numPixelsDraggedHorizontal, // negative if dragged left.
             y: numPixelsDraggedVertically, // negative if dragged up.
             dragCancelled: boolean // don't know to how to cancel drag.
         }
         *******************/
        console.log('Element was dragged', event);

    }


    logDrop(dropData) {
        console.log(dropData);
    }


    reorder(newIndex) {
        moveByIndex(this.indexBeingDragged, newIndex, this.list);
        this.rowDraggedOver = -1;
        this.indexBeingDragged = -1;
    }


    set_indexBeingDragged(i) {
        this.indexBeingDragged = i;
    }


    prepareForDrop(index) {
        this.rowDraggedOver = index;
    }


}

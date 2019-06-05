import { Component, OnInit } from '@angular/core';
import { moveByIndex } from '@writetome51/array-move-by-index';
import { getAndRemoveByIndex } from '@writetome51/array-get-and-remove-by-index';
import { insertAt } from '@writetome51/array-insert-at';


@Component({
    selector: 'drag-and-drop-list',
    templateUrl: './drag-and-drop-list.component.html',
    styleUrls: ['./drag-and-drop-list.component.css']
})
export class DragAndDropListComponent implements OnInit {


    list = ['coffee', 'beer', 'soda', 'water', 'tea', 'milk'];
    indexBeingDragged: number;
    rowDraggedOver: number;
    rowShiftDown: number;
    rowShiftUp: number;


    ngOnInit() {
    }


    reorder(event, newIndex) {
        event.preventDefault();
        moveByIndex(this.indexBeingDragged, newIndex, this.list);
        this.rowDraggedOver = -1;
        this.indexBeingDragged = -1;
        this.rowShiftUp = -1;
        this.rowShiftDown = -1;
    }


    set_indexBeingDragged(i) {
        this.indexBeingDragged = i;
    }


    prepareForDrop(event, index) {
        event.preventDefault();
        this.rowDraggedOver = index;
        if (index < this.indexBeingDragged) {
            this.rowShiftDown = index;
            this.rowShiftUp = -1;
        }
        if (index > this.indexBeingDragged) {
            this.rowShiftUp = index;
            this.rowShiftDown = -1;
        }
    }

}

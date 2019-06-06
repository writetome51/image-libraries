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


    reorder(newIndex) {
        moveByIndex(this.indexBeingDragged, newIndex, this.list);
        this.indexBeingDragged = -1;
    }


    set_indexBeingDragged(i) {
        this.indexBeingDragged = i;
    }


}

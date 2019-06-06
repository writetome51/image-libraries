import { Component, Input } from '@angular/core';
import { moveByIndex } from '@writetome51/array-move-by-index';


@Component({
    selector: 're-arrangeable-list',
    templateUrl: './re-arrangeable-list.component.html',
    styleUrls: ['./re-arrangeable-list.component.css']
})
export class ReArrangeableListComponent {


    @Input() items;


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

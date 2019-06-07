import { Component, Input } from '@angular/core';
import { ListItemMoverService } from '../../services/list-item-mover.service';


@Component({
    selector: 're-arrangeable-list-item',
    templateUrl: './re-arrangeable-list-item.component.html',
    styleUrls: ['./re-arrangeable-list-item.component.css']
})
export class ReArrangeableListItemComponent {


    @Input() index: number;
    isBeingDragged = false;


    constructor(private  __listItemMover: ListItemMoverService) {
    }


    set_isBeingDragged() {
        this.isBeingDragged = true;
        this.__listItemMover.indexBeingMoved = this.index;
    }


    dropDraggedItemHere() {
        this.__listItemMover.moveItemTo(this.index);
    }


}

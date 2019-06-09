import { Component, Input } from '@angular/core';
import { ListItemMoverService } from '../list-item-mover.service';


@Component({
    selector: 're-arrangeable-list-item',
    templateUrl: './re-arrangeable-list-item.component.html',
    styleUrls: ['./re-arrangeable-list-item.component.css']
})
export class ReArrangeableListItemComponent {


    @Input() index: number; // required
    @Input() isDisplayedAsBlock = false; // optional
    isBeingDragged = false;
    isBeingDraggedOnto = false;

    // If list items are displayed as block, one item per line:
    draggedOntoFromTop = false;
    draggedOntoFromBottom = false;

    // If list items are displayed inline or grid:
    draggedOntoFromRight = false;
    draggedOntoFromLeft = false;


    constructor(private  __listItemMover: ListItemMoverService) {
    }


    set_isBeingDragged() {
        this.isBeingDragged = true;
        this.__listItemMover.indexBeingMoved = this.index;
    }


    unset_isBeingDragged() {
        this.isBeingDragged = false;
        this.__listItemMover.indexBeingMoved = -1;
    }


    set_isBeingDraggedOnto() {
        this.isBeingDraggedOnto = true;
        if (this.index < this.__listItemMover.indexBeingMoved) {
            if (this.isDisplayedAsBlock) this.draggedOntoFromBottom = true;
            else this.draggedOntoFromRight = true;

        }
        else if (this.index > this.__listItemMover.indexBeingMoved) {
            if (this.isDisplayedAsBlock) this.draggedOntoFromTop = true;
            else this.draggedOntoFromLeft = true;
        }
    }


    unset_isBeingDraggedOnto() {
        this.isBeingDraggedOnto = false;
        this.draggedOntoFromRight = false;
        this.draggedOntoFromLeft = false;
        this.draggedOntoFromTop = false;
        this.draggedOntoFromBottom = false;
    }


    dropDraggedItemHere() {
        this.__listItemMover.moveItemTo(this.index);
        this.unset_isBeingDraggedOnto();
    }


}

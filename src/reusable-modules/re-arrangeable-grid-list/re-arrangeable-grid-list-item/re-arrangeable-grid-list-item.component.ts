import { Component, Input } from '@angular/core';
import { ListItemMoverService } from '../list-item-mover.service';


@Component({
	selector: 're-arrangeable-grid-list-item',
	templateUrl: './re-arrangeable-grid-list-item.component.html',
	styleUrls: ['./re-arrangeable-grid-list-item.component.css']
})
export class ReArrangeableGridListItemComponent {


	@Input() index: number; // required
	isBeingDragged = false;
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
	}


	set_isBeingDraggedOnto() {
		if (this.index < this.__listItemMover.indexBeingMoved) {
			this.draggedOntoFromRight = true;
		}
		else if (this.index > this.__listItemMover.indexBeingMoved) {
			this.draggedOntoFromLeft = true;
		}
	}


	unset_isBeingDraggedOnto() {
		this.draggedOntoFromRight = false;
		this.draggedOntoFromLeft = false;
	}


	dropDraggedItemHere() {
		this.__listItemMover.moveItemTo(this.index);
		this.unset_isBeingDraggedOnto();
	}


}

import { Component, Input } from '@angular/core';
import { ListRearrangerService } from '../../list-rearranger.service';
import { IndexBeingMovedData as indexBeingMoved } from '../index-being-moved.data';


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


	constructor(private  __listRearranger: ListRearrangerService) {}


	set_isBeingDragged() {
		this.isBeingDragged = true;
		indexBeingMoved.data = this.index;
	}


	unset_isBeingDragged() {
		this.isBeingDragged = false;
	}


	set_isBeingDraggedOnto() {
		if (this.index < indexBeingMoved.data) this.draggedOntoFromRight = true;

		else if (this.index > indexBeingMoved.data) this.draggedOntoFromLeft = true;
	}


	unset_isBeingDraggedOnto() {
		this.draggedOntoFromRight = false;
		this.draggedOntoFromLeft = false;
	}


	dropDraggedItemHere() {
		this.__listRearranger.moveItemTo(this.index);
		this.unset_isBeingDraggedOnto();
	}

}

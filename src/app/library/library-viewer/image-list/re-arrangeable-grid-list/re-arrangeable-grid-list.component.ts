import { Component, Input } from '@angular/core';
import { ListItemMoverService } from '@services/list-item-mover.service';


@Component({
	selector: 're-arrangeable-grid-list',
	template: `<ul><ng-content></ng-content></ul>`
})
export class ReArrangeableGridListComponent {

	constructor(private  __listItemMover: ListItemMoverService) {
	}


	@Input()
	set data(value: any[]) {  // Required in order to re-arrange the list.
		this.__listItemMover.data = value;
	}


}

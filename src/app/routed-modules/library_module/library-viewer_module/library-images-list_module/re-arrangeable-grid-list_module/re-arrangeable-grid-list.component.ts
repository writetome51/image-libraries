import { Component, Input } from '@angular/core';
import { ListRearrangerService } from './list-rearranger.service';


@Component({
	selector: 're-arrangeable-grid-list',
	template: `<ul><ng-content></ng-content></ul>`
})
export class ReArrangeableGridListComponent {

	constructor(private  __listRearranger: ListRearrangerService) {}


	@Input()
	set data(value: any[]) {  // Required in order to re-arrange the list.
		this.__listRearranger.setList(value);
	}

}

import { CommonModule } from '@angular/common';
import { DragAndDropModule } from 'angular-draggable-droppable';
import { NgModule } from '@angular/core';
import { ReArrangeableGridListItemComponent }
	from './re-arrangeable-grid-list-item.component';


@NgModule({
	declarations: [ReArrangeableGridListItemComponent],
	imports: [
		CommonModule,
		DragAndDropModule
	],
	exports: [ReArrangeableGridListItemComponent]
})
export class ReArrangeableGridListItemModule {}

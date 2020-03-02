import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragAndDropModule } from 'angular-draggable-droppable';
import { ReArrangeableGridListComponent } from './re-arrangeable-grid-list.component';
import { ReArrangeableGridListItemComponent }
	from './re-arrangeable-grid-list-item/re-arrangeable-grid-list-item.component';
import { DeleteItemButtonComponent }
	from './re-arrangeable-grid-list-item/delete-item-button/delete-item-button.component';


@NgModule({
	declarations: [
		ReArrangeableGridListComponent,
		ReArrangeableGridListItemComponent,
		DeleteItemButtonComponent
	],
	imports: [
		CommonModule,
		DragAndDropModule,
	],
	exports: [
		ReArrangeableGridListComponent,
		ReArrangeableGridListItemComponent
	]
})
export class ReArrangeableGridListModule {
}

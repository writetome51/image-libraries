import { CommonModule } from '@angular/common';
import { DragAndDropModule } from 'angular-draggable-droppable';
import { NgModule } from '@angular/core';
import { ReArrangeableGridListComponent } from './re-arrangeable-grid-list.component';
import { ReArrangeableGridListItemComponent }
	from './re-arrangeable-grid-list-item/re-arrangeable-grid-list-item.component';
import { HoverableContainerModule }
	from '@hoverable-container/hoverable-container.module';


@NgModule({
	declarations: [
		ReArrangeableGridListComponent,
		ReArrangeableGridListItemComponent
	],
	imports: [
		CommonModule,
		DragAndDropModule,
		HoverableContainerModule
	],
	exports: [
		ReArrangeableGridListComponent,
		ReArrangeableGridListItemComponent
	]
})
export class ReArrangeableGridListModule {
}

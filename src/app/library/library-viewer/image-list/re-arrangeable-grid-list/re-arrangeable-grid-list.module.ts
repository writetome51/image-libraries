import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragAndDropModule } from 'angular-draggable-droppable';
import { ListItemMoverService } from './list-item-mover.service';
import { ReArrangeableGridListComponent } from './re-arrangeable-grid-list.component';
import { ReArrangeableGridListItemComponent }
	from './re-arrangeable-grid-list-item/re-arrangeable-grid-list-item.component';


@NgModule({
	declarations: [
		ReArrangeableGridListComponent,
		ReArrangeableGridListItemComponent
	],
	imports: [
		CommonModule,
		DragAndDropModule,
	],
	providers: [ListItemMoverService],
	exports: [
		ReArrangeableGridListComponent,
		ReArrangeableGridListItemComponent
	]
})
export class ReArrangeableGridListModule {
}

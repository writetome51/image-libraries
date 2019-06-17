import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragAndDropModule } from 'angular-draggable-droppable';
import { ListItemMoverService } from './list-item-mover.service';
import { ReArrangeableListComponent } from './re-arrangeable-list.component';
import { ReArrangeableListItemComponent }
	from './re-arrangeable-list-item/re-arrangeable-list-item.component';


@NgModule({
	declarations: [
		ReArrangeableListComponent,
		ReArrangeableListItemComponent
	],
	imports: [
		CommonModule,
		DragAndDropModule,
	],
	providers: [ListItemMoverService],
	exports: [
		ReArrangeableListComponent,
		ReArrangeableListItemComponent
	]
})
export class ReArrangeableListModule {
}

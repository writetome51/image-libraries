import { CommonModule } from '@angular/common';
import { DragAndDropModule } from 'angular-draggable-droppable';
import { HoverableContainerModule } from '@hoverable-container_module/hoverable-container.module';
import { ListRearrangerService } from '../list-rearranger.service';
import { NgModule } from '@angular/core';
import { ReArrangeableGridListComponent } from './re-arrangeable-grid-list.component';
import { ReArrangeableGridListItemComponent }
	from './re-arrangeable-grid-list-item_component/re-arrangeable-grid-list-item.component';


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
	providers: [ListRearrangerService],
	exports: [
		ReArrangeableGridListComponent,
		ReArrangeableGridListItemComponent
	]
})
export class ReArrangeableGridListModule {}

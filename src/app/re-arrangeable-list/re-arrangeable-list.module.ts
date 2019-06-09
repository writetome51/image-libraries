import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReArrangeableListComponent } from './re-arrangeable-list.component';
import { ReArrangeableListItemComponent }
    from './re-arrangeable-list-item/re-arrangeable-list-item.component';
import { ListItemMoverService } from './list-item-mover.service';


@NgModule({
    declarations: [
        ReArrangeableListComponent,
        ReArrangeableListItemComponent
    ],
    imports: [
        CommonModule
    ],
    providers: [ListItemMoverService],
    exports: [
        ReArrangeableListItemComponent,
        ReArrangeableListComponent
    ]
})
export class ReArrangeableListModule {
}

import { Component, Input, OnInit } from '@angular/core';
import { ListItemMoverService } from '../services/list-item-mover.service';


@Component({
    selector: 're-arrangeable-list',
    templateUrl: './re-arrangeable-list.component.html'
})
export class ReArrangeableListComponent {

    constructor(private  __listItemMover: ListItemMoverService) {
    }


    @Input() set list(value) {
        this.__listItemMover.list = value;
    }


}

import { AfterViewInit, Component, Input } from '@angular/core';
import { ImageStoreService } from '../services/image-store.service';


// declare var $: any;


@Component({
    selector: 're-arrangeable-list-item',
    templateUrl: './re-arrangeable-list-item.component.html',
    styleUrls: ['./re-arrangeable-list-item.component.css']
})
export class ReArrangeableListItemComponent {


    @Input() index: number;
    indexBeingDragged: number;


    constructor(private __imageStore: ImageStoreService) {
    }


    set_indexBeingDragged(i) {
        this.indexBeingDragged = i;
    }


    /****
     ngAfterViewInit(): void {
        let panelList = $('#draggablePanelList');

        panelList.sortable({
            update: function() {
                $('.panel', panelList).each(function(index, elem) {
                    var $listItem = $(elem),
                        newIndex = $listItem.index();

                    // Persist the new indices.
                });
            }
        });
    }
     ****/


}

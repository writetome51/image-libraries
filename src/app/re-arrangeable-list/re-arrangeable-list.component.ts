import { Component, Input } from '@angular/core';
import { moveByIndex } from '@writetome51/array-move-by-index';
import * as $ from 'jquery-ui';


@Component({
    selector: 're-arrangeable-list',
    templateUrl: './re-arrangeable-list.component.html',
    styleUrls: ['./re-arrangeable-list.component.css']
})
export class ReArrangeableListComponent {


    @Input() items;
    list = ['coffee', 'beer', 'soda', 'water', 'tea', 'milk'];
    indexBeingDragged: number;

    private $: any;


    reArrange(){
        let panelList = $('#draggablePanelList');

        panelList.sortable({
            // Only make the .panel-heading child elements support dragging.
            // Omit this to make then entire <li>...</li> draggable.
            handle: '.panel-heading',
            update: function() {
                $('.panel', panelList).each(function(index, elem) {
                    var $listItem = $(elem),
                        newIndex = $listItem.index();

                    // Persist the new indices.
                });
            }
        });
    }


    reorder(newIndex) {
        moveByIndex(this.indexBeingDragged, newIndex, this.list);
        this.indexBeingDragged = -1;
    }


    set_indexBeingDragged(i) {
        this.indexBeingDragged = i;
    }


}

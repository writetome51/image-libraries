import { AfterViewInit, Component, Input } from '@angular/core';
import { moveByIndex } from '@writetome51/array-move-by-index';
import './node_modules/jquery-ui-dist/jquery.min.js';


var $: any = $;


@Component({
    selector: 're-arrangeable-list',
    templateUrl: './re-arrangeable-list.component.html',
    styleUrls: ['./re-arrangeable-list.component.css']
})
export class ReArrangeableListComponent implements AfterViewInit {


    @Input() items;
    list = ['coffee', 'beer', 'soda', 'water', 'tea', 'milk'];
    indexBeingDragged: number;


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


    reorder(newIndex) {
        moveByIndex(this.indexBeingDragged, newIndex, this.list);
        this.indexBeingDragged = -1;
    }


    set_indexBeingDragged(i) {
        this.indexBeingDragged = i;
    }


}

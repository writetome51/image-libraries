import { Component, OnInit } from '@angular/core';
import { ImageStoreService } from '../services/image-store.service';


@Component({
    selector: 'image-viewer',
    templateUrl: './image-viewer.component.html',
    styleUrls: ['./image-viewer.component.sass']
})
export class ImageViewerComponent implements OnInit {

    constructor(private __imageStore: ImageStoreService) {
    }


    ngOnInit() {
    }


    get images() {
        return this.__imageStore.images;
    }

}

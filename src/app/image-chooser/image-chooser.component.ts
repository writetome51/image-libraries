import { Component } from '@angular/core';
import { ImageProcessorService } from '../services/image-processor.service';


@Component({
    selector: 'image-chooser',
    templateUrl: './image-chooser.component.html'
})
export class ImageChooserComponent {


    constructor(private __imageProcessor: ImageProcessorService) {
    }


    addToLibrary(images: FileList) {
        this.__imageProcessor.process(images);
    }


}

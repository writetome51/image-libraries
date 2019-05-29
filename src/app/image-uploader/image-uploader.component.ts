import { Component } from '@angular/core';
import { noValue } from '@writetome51/has-value-no-value';


@Component({
    selector: 'image-uploader',
    templateUrl: './image-uploader.component.html'
})
export class ImageUploaderComponent {

    // Have user save all photo data to json file on their own machine.
    // Provide form allowing them to re-upload json file, then this component
    // reads it and shows images.


    constructor() {
    }


}

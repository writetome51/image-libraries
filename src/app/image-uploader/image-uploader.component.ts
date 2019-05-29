import { Component } from '@angular/core';
import { getObjectFromJSON } from 'get-object-from-json';
import { noValue } from '@writetome51/has-value-no-value';


@Component({
    selector: 'image-uploader',
    templateUrl: './image-uploader.component.html'
})
export class ImageUploaderComponent {

    // Have user save all photo data to json file on their own machine.
    // Provide form allowing them to re-upload json file, then this component
    // reads it and shows images.


    public doneReading = false;
    public storedImages = [];


    get imagesForViewing() {
        return this.storedImages;
    }


    readLibrary(file) {
        const reader = new FileReader();

        reader.onload = () => {
            let json: any = reader.result;
            this.storedImages = getObjectFromJSON(json);
            this.doneReading = true;
        };

        reader.readAsText(file, 'utf-8');
    }


}

import { Injectable } from '@angular/core';
import { append } from '@writetome51/array-append-prepend';


@Injectable({
    providedIn: 'root'
})
export class DataURLExtractorService {


    dataURLs = [];
    doneExtracting = false;


    extract(files: FileList) {
        [].forEach.call(files, this.__doThis);
    }


    private __doThis(file) {

        const reader = new FileReader();

        reader.onload = () => {

            let lastIndex = self.images.length - 1;
            this.images[lastIndex].name = file.name;

            // @ts-ignore
            self.images[lastIndex].src = reader.result; // sets src to a data url.

            if (self.images.length === files.length) { // If finished reading each file...


            }
        };
        reader.readAsDataURL(file);
    }


}

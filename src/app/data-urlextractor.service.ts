import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class DataURLExtractorService {


    dataURLs = [];
    doneExtracting = false;


    extract(files: FileList) {
        [].forEach.call(files, this.__doThis);
    }


    private __doThis(file, index, files) {

        const reader = new FileReader();

        reader.onload = () => {
            this.dataURLs.push(reader.result);

            if (this.dataURLs.length === files.length) { // If finished reading each file...
                this.doneExtracting = true;
            }
        };
        reader.readAsDataURL(file);
    }


}

import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class DataURLExtractorService {


    dataURLs = [];
    private __doneExtracting = false;


    get doneExtracting(): boolean {
        return this.__doneExtracting;
    }


    extract(files: FileList): void {
        this.dataURLs = [];

        [].forEach.call(files, this.__extract);
    }


    private __extract(file, index, files) {

        const reader = new FileReader();

        reader.onload = () => {
            this.dataURLs.push(reader.result);

            if (this.dataURLs.length === files.length) { // If finished reading each file...
                this.__doneExtracting = true;
            }
        };

        reader.readAsDataURL(file);
    }


}

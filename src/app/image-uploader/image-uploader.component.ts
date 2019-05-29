import { Component } from '@angular/core';
import { getObjectFromJSON } from 'get-object-from-json';
import { notEmpty } from '@writetome51/is-empty-not-empty';
import { append } from '@writetome51/array-append-prepend';
import { noValue } from '@writetome51/has-value-no-value';
// @ts-ignore
const FileSaver = require('file-saver');



@Component({
    selector: 'image-uploader',
    templateUrl: './image-uploader.component.html'
})
export class ImageUploaderComponent {

    // Have user save all photo data to json file on their own machine.
    // Provide form allowing them to re-upload json file, then this component
    // reads it and shows images.


    public imagesToStore: { name: '', src: '', description: '', caption: '' }[] = [];
    public imagesReady = false;
    public storedImages = [];


    get imagesForViewing() {
        return this.storedImages;
    }


    addToLibrary(files: FileList) {
        if (notEmpty(files)) {
            this.set_srces_toDataURLs(files);
        }
    }


    readImageLibrary(file){
        console.log(file);
        const reader = new FileReader();
        reader.onload = () => {
            let json: any = reader.result;
            this.storedImages = getObjectFromJSON(json);
            this.imagesReady = true;
        };

        reader.readAsText(file, 'utf-8')
    }


    // Converts `file` to a data url, and assigns that to the 'src' property of `element`.
    // Does not modify file.

    set_srces_toDataURLs(files) {
        let self = this; // Have to do this b/c (`this` === reader) inside reader.onload().
        self.imagesToStore.length = 0;

        [].forEach.call(files, doThis);


        function doThis(file, i) {

            const reader = new FileReader();

            reader.onload = () => {
                self.imagesToStore.push({name: '', src: '', description: '', caption: ''});
                let lastIndex = self.imagesToStore.length - 1;
                self.imagesToStore[lastIndex].name = file.name;

                // @ts-ignore
                self.imagesToStore[lastIndex].src = reader.result; // sets src to a data url.

                if (self.imagesToStore.length === files.length) { // If finished reading each file...

                    append(self.imagesToStore, self.storedImages);
                    let dataToWrite = JSON.stringify(self.storedImages);

                    let f = new File([dataToWrite], 'image_library.txt', {type: 'text/plain;charset=utf-8'});
                    FileSaver.saveAs(f);
                }
            };
            reader.readAsDataURL(file);
        }
    }


}

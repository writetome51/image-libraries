import { Component } from '@angular/core';
import { ObjectInLocalStorage } from '@writetome51/object-in-local-storage';
import { notEmpty } from '@writetome51/is-empty-not-empty';
import { append } from '@writetome51/array-append-prepend';
import { noValue } from '@writetome51/has-value-no-value';


@Component({
    selector: 'image-uploader',
    templateUrl: './image-uploader.component.html'
})
export class ImageUploaderComponent {

    public files: any[];
    public images: { name: '', src: '', description: '', caption: '' }[] = [];
    public imagesReady = false;
    public storedImages = new ObjectInLocalStorage('__storedImages');


    processInput(files: FileList) {
        if (notEmpty(files)) {
            this.set_srces_toDataURLs(files);
        }
    }


    // Converts `file` to a data url, and assigns that to the 'src' property of `element`.
    // Does not modify file.

    set_srces_toDataURLs(files) {
        let self = this;

        [].forEach.call(files, doThis);


        function doThis(file, i) {

            const reader = new FileReader();

            reader.onload = (ev) => {
                self.images.push({name: '', src: '', description: '', caption: ''});
                self.images[i].name = file.name;

                // @ts-ignore
                self.images[i].src = reader.result; // sets src to a data url.

                if (self.images.length === files.length) {
                    let retrievedImages: any = self.storedImages.get();
                    if (noValue(retrievedImages)) {
                        retrievedImages = [];
                    }

                    append(self.images, retrievedImages);
                    self.storedImages.set(retrievedImages);

                    self.imagesReady = true;
                }
            };
            reader.readAsDataURL(file);
        }
    }


}

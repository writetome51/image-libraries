import { Component } from '@angular/core';
import { ObjectInLocalStorage } from '@writetome51/object-in-local-storage';
import { notEmpty } from '@writetome51/is-empty-not-empty';


@Component({
    selector: 'image-uploader',
    templateUrl: './image-uploader.component.html'
})
export class ImageUploaderComponent {

    public files: any[];
    public images: { src: string, name: string }[] = [];
    public imagesReady = false;
    private __initialImage = {name: '', src: '', description: '', caption: ''};
    public storedImages = new ObjectInLocalStorage('__storedImages');


    processInput(files: FileList) {
        if (notEmpty(files)) {
            this.set_srces_toDataURL(files);
        }
    }


    // Converts `file` to a data url, and assigns that to the 'src' property of `element`.
    // Does not modify file.

    set_srces_toDataURL(files) {
        [].forEach.call(files, doThis);

        let self = this;


        function doThis(file, i) {

            const reader = new FileReader();

            reader.onload = (ev) => {
                console.log(self);
                self.images.push({name: '', src: '', description: '', caption: ''});
                self.images[i].name = file.name;
                // @ts-ignore
                self.images[i].src = reader.result; // sets src to a data url.
                if (self.images.length === files.length) {
                    self.storedImages.set(self.images);
                    self.imagesReady = true;
                }
            };
            reader.readAsDataURL(file);
        }
    }


}

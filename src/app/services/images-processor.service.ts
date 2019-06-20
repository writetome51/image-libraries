import { getDataURLs } from '@writetome51/get-data-urls';
import { ImageStoreService } from './image-store.service';
import { Injectable } from '@angular/core';
import { notEmpty } from '@writetome51/is-empty-not-empty';


@Injectable({
	providedIn: 'root'
})
export class ImagesProcessorService {


	constructor(
		private __imageStore: ImageStoreService
	) {
	}


	async process(files: FileList | File[]) {

		if (notEmpty(files)) {
			let dataURLs = await getDataURLs(files);
			this.__sendTo__imageStore(files, dataURLs);
		}
	}


	private __sendTo__imageStore(files: FileList  | File[], dataURLs) {

		for (let i = 0; i < files.length; ++i) {
			this.__addImageToStore(files[i], dataURLs[i]);
		}
	}


	private __addImageToStore(file, dataURL) {
		let image = {name: file.name, src: dataURL, description: ''};

		this.__imageStore.images.push(image);
	}


}

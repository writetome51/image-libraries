import { getDataURLs } from '@writetome51/get-data-urls';
import { ImageStoreService } from './image-store.service';
import { Injectable } from '@angular/core';
import { notEmpty } from '@writetome51/is-empty-not-empty';


@Injectable({
	providedIn: 'root'
})
export class ImageProcessorService {


	constructor(
		private __imageStore: ImageStoreService
	) {
	}


	async process(files: FileList) {

		if (notEmpty(files)) {
			let dataURLs = await getDataURLs(files);
			this.__sendTo__imageStore(files, dataURLs);
		}
	}


	processImageURL(url) {
		this.__imageStore.images.push({name: '', src: url, description: ''});
	}


	private __sendTo__imageStore(files: FileList, dataURLs) {

		for (let i = 0; i < files.length; ++i) {
			this.__addImageToStore(files[i], dataURLs[i]);
		}
	}


	private __addImageToStore(file, dataURL) {
		let image = {name: file.name, src: dataURL, description: ''};

		this.__imageStore.images.push(image);
	}


}

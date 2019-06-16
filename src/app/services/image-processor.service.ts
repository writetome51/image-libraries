import { ImageStoreService } from './image-store.service';
import { Injectable } from '@angular/core';
import { notEmpty } from '@writetome51/is-empty-not-empty';
import { getDataURLs } from '../../getDataURLs';


@Injectable({
	providedIn: 'root'
})
export class ImageProcessorService {


	private __doneProcessing = false;


	constructor(
		private __imageStore: ImageStoreService
	) {
	}


	get doneProcessing(): boolean {
		return this.__doneProcessing;
	}


	async process(files: FileList) {
		this.__doneProcessing = false;

		if (notEmpty(files)) {
			let dataURLs = await getDataURLs(files);
			this.__sendTo__imageStore(files, dataURLs);
		}

		this.__doneProcessing = true;
	}


	private __sendTo__imageStore(files: FileList, dataURLs) {

		for (let i = 0; i < files.length; ++i) {
			this.__addImageToStore(files[i], dataURLs[i]);
		}
	}


	private __addImageToStore(file, dataURL) {
		let image = {name: '', src: '', description: ''};

		image.name = file.name;
		image.src = dataURL;
		this.__imageStore.images.push(image);
	}


}

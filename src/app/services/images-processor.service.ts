import { getDataURLs } from '@writetome51/get-data-urls';
import { Injectable } from '@angular/core';
import { notEmpty } from '@writetome51/is-empty-not-empty';


@Injectable({
	providedIn: 'root'
})
export class ImagesProcessorService {


	constructor(
		private __library: LibraryService
	) {
	}


	async process(files: FileList | File[]) {

		if (notEmpty(files)) {
			let dataURLs = await getDataURLs(files);
			this.__sendTo__library(files, dataURLs);
		}
	}


	private __sendTo__library(files: FileList  | File[], dataURLs) {

		for (let i = 0; i < files.length; ++i) {
			this.__addImageToLibrary(files[i], dataURLs[i]);
		}
	}


	private __addImageToLibrary(file, dataURL) {
		let image = {name: file.name, src: dataURL, description: ''};

		this.__library.images.push(image);
	}


}

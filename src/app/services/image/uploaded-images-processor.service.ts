import { CurrentLibraryService } from '../library/current-library.service';
import { getDataURLs } from '@writetome51/get-data-urls';
import { Injectable } from '@angular/core';
import { notEmpty } from '@writetome51/is-empty-not-empty';


@Injectable({
	providedIn: 'root'
})
export class UploadedImagesProcessorService {


	constructor(
		private __currentLibrary: CurrentLibraryService
	) {
	}


	async process(files: FileList | File[]) {

		if (notEmpty(files)) {
			let dataURLs = await getDataURLs(files);
			this.__sendTo__currentLibrary(files, dataURLs);
		}
	}


	private __sendTo__currentLibrary(files: FileList | File[], dataURLs) {

		for (let i = 0; i < files.length; ++i) {
			this.__addImageTo__currentLibrary(files[i], dataURLs[i]);
		}
	}


	private __addImageTo__currentLibrary(file, dataURL) {
		let image = {name: file.name, src: dataURL, description: ''};

		this.__currentLibrary.images.push(image);
	}


}

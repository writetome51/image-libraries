import { LoadedLibraryService } from '../library/loaded-library.service';
import { getDataURLs } from '@writetome51/get-data-urls';
import { Injectable } from '@angular/core';
import { notEmpty } from '@writetome51/is-empty-not-empty';
import { DirectProcessor } from '../../interfaces/direct-processor';
import { getCopy } from '@writetome51/array-get-copy';
import { AppImage } from '../../interfaces/app-image';


@Injectable({providedIn: 'root'})

export class UploadedImagesProcessorService implements DirectProcessor {

	private __changes: AppImage[];


	constructor(private __loadedLibrary: LoadedLibraryService) {
	}


	async process(files: FileList | File[]) {

		if (notEmpty(files)) {
			let dataURLs = await getDataURLs(files);
			this.__sendTo__loadedLibrary(files, dataURLs);
		}
	}


	private __sendTo__loadedLibrary(files: FileList | File[], dataURLs) {
		this.__changes = getCopy(this.__loadedLibrary.images);

		for (let i = 0; i < files.length; ++i) {
			this.__addImageTo__changes(files[i], dataURLs[i]);
		}
		this.__loadedLibrary.setChange('images', this.__changes);
	}


	private __addImageTo__changes(file, dataURL) {
		let image: AppImage = {
			name: file.name,
			src: dataURL,
			description: '',
			tags: [],
			date: new Date(),
			location: ''
		};
		this.__changes.push(image);
	}


}

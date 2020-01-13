import { AppImage } from '../../interfaces/app-image';
import { CurrentLibraryService } from '../library/current-library.service';
import { DirectProcessor } from '../../interfaces/direct-processor';
import { getCopy } from '@writetome51/array-get-copy';
import { getDataURLs } from '@writetome51/get-data-urls';
import { Injectable } from '@angular/core';
import { notEmpty } from '@writetome51/is-empty-not-empty';
import { noValue } from '@writetome51/has-value-no-value';


@Injectable({providedIn: 'root'})

export class UploadedImagesProcessorService implements DirectProcessor {

	private __changes: AppImage[];


	constructor(private __currentLibrary: CurrentLibraryService) {
	}


	async process(files: FileList | File[]): Promise<void> {

		if (notEmpty(files)) {
			let dataURLs = await getDataURLs(files);
			this.__addToChanges(files, dataURLs);
		}
	}


	private __addToChanges(files: FileList | File[], dataURLs) {
		if (noValue(this.__changes)) this.__changes = getCopy(this.__currentLibrary.images);

		for (let i = 0; i < files.length; ++i) {
			this.__addImageTo__changes(files[i], dataURLs[i]);
		}
		this.__currentLibrary.setChange('images', this.__changes);
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

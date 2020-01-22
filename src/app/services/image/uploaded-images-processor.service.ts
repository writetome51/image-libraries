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

		if (noValue(this.__changes)) this.__changes = getCopy(this.__currentLibrary.images);

		for (let i = 0; i < files.length; ++i) {
			let url = await this.__getDataURL(files[i]);

			let image: AppImage = {
				name: files[i].name,
				src: url,
				description: '',
				tags: [],
				date: new Date(),
				location: ''
			};
			this.__changes.push(image);
		}

		this.__currentLibrary.setChange('images', this.__changes);
	}


	private async __getDataURL(file: File): Promise<string> {

		return new Promise((returnData) => {

			const reader = new FileReader();

			reader.onload = () => {
				// @ts-ignore
				returnData(reader.result);
			};

			reader.readAsDataURL(file);
		});
	}


}

import { AppImage } from '../../interfaces/app-image';
import { CurrentLibraryService } from '../library/current-library.service';
import { DirectProcessor } from '../../interfaces/direct-processor';
import { getCopy } from '@writetome51/array-get-copy';
import { getDataURL } from '@writetome51/get-data-url';
import { Injectable } from '@angular/core';


@Injectable({providedIn: 'root'})

export class UploadedImagesProcessorService implements DirectProcessor {

	private __changes: AppImage[];


	constructor(private __currentLibrary: CurrentLibraryService) {
	}


	async process(files: FileList | File[]): Promise<void> {
		if (this.__currentLibrary.hasChanges && this.__currentLibrary.changes.images) {
			this.__changes = getCopy(this.__currentLibrary.changes.images);
		}
		else this.__changes = getCopy(this.__currentLibrary.images);

		for (let i = 0; i < files.length; ++i) {

			let image: AppImage = {
				name: files[i].name,
				src:  await getDataURL(files[i]),
				description: '',
				tags: [],
				date: new Date(files[i].lastModified),
				location: ''
			};
			this.__changes.push(image);
		}

		this.__currentLibrary.setChange('images', this.__changes);
		this.__changes = undefined;
	}


}

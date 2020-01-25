import { AppImage } from '../../interfaces/app-image';
import { CurrentLibraryService as library } from '../library/current-library.service';
import { DirectProcessor } from '../../interfaces/direct-processor';
import { getCopy } from '@writetome51/array-get-copy';
import { getDataURL } from '@writetome51/get-data-url';
import { Injectable } from '@angular/core';
import { LibraryChangesService as libraryChanges } from '../library/library-changes.service';


@Injectable({providedIn: 'root'})

export class UploadedImagesProcessorService implements DirectProcessor {

	private __changes: AppImage[];


	async process(files: FileList | File[]): Promise<void> {
		if (libraryChanges.exist && libraryChanges.data['images']) {
			this.__changes = getCopy(libraryChanges.data['images']);
		}
		else this.__changes = getCopy(library.data.images);

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

		libraryChanges.setChange('images', this.__changes);
		this.__changes = undefined;
	}


}

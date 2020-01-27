import { AppImage } from '../../interfaces/app-image';
import { CurrentLibraryData as library } from '../../data/current-library.data';
import { DirectProcessor } from '../../interfaces/direct-processor';
import { getCopy } from '@writetome51/array-get-copy';
import { getDataURL } from '@writetome51/get-data-url';
import { Injectable } from '@angular/core';
import { LibraryChangesService as libraryChanges } from '../library/library-changes.service';


@Injectable({providedIn: 'root'})

export class UploadedImagesProcessorService implements DirectProcessor {


	async process(files: FileList | File[]): Promise<void> {
		let changes = [];

		if (libraryChanges.exist && libraryChanges.getChange('images')) {
			changes = getCopy(libraryChanges.getChange('images'));
		}
		else changes = getCopy(library.data.images);

		for (let i = 0; i < files.length; ++i) {

			let image: AppImage = {
				name: files[i].name,
				src:  await getDataURL(files[i]),
				description: '',
				tags: [],
				date: new Date(files[i].lastModified),
				location: ''
			};
			changes.push(image);
		}

		libraryChanges.setChange('images', changes);
	}


}

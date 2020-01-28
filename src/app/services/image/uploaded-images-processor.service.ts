import { AppImage } from '../../interfaces/app-image';
import { CurrentLibraryData as library } from '../../data/current-library.data';
import { DirectProcessor } from '../../interfaces/direct-processor';
import { hasValue } from '@writetome51/has-value-no-value';
import { getDataURL } from '@writetome51/get-data-url';
import { notEmpty } from '@writetome51/is-empty-not-empty';
import { Injectable } from '@angular/core';
import { LibraryChangesService as libraryChanges } from '../library/library-changes.service';
import { getMax } from '@writetome51/get-max-min';


@Injectable({providedIn: 'root'})

export class UploadedImagesProcessorService implements DirectProcessor {


	async process(files: FileList | File[]): Promise<void> {
		let n = -1;

		if (libraryChanges.exist && libraryChanges.has('images')) {
			console.log('changes exist');
			let keys = Object.keys(libraryChanges.get('images'));
			n = getMax(keys);
		}
		else if (notEmpty(library.data.images)) n = library.data.images.length - 1;


		for (let i = 0; i < files.length; ++i) {
			++n;
			console.log(n);  // may log 'undefined' - why??

			let url = await getDataURL(files[i]);

			let image: AppImage = {
				name: files[i].name,
				src: url,
				description: '',
				tags: [],
				date: new Date(files[i].lastModified),
				location: ''
			};

			libraryChanges.set(`images.${n}`, image);

		}

	}


}

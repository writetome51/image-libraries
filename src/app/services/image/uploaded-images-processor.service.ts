import { DBImage } from '../../interfaces/db-image';
import { DirectProcessor } from '../../interfaces/direct-processor';
import { getDataURL } from '@writetome51/get-data-url';
import { getMax } from '@writetome51/get-max-min';
import { Injectable } from '@angular/core';
import { ImagesToDisplayService } from './images-to-display.service';
import { LibraryChangesService } from '../library/library-changes.service';
import { Subject, Subscribable } from 'rxjs';
import { ItemBeingRemoved } from '../../interfaces/item-being-removed';
import { HasSubscribable } from '../../interfaces/has-subscribable';


@Injectable({providedIn: 'root'})

export class UploadedImagesProcessorService implements DirectProcessor,
	HasSubscribable<{ _id: number, index: number }> {

	private __subject = new Subject();


	get subscribable(): Subscribable<{ _id: number, index: number }> {
		return this.__subject;
	}


	constructor(
		private __libraryChanges: LibraryChangesService,
		private __imagesToDisplay: ImagesToDisplayService
	) {
	}


	async process(files: FileList | File[]): Promise<void> {
		let _id = -1;
		if (this.__imagesToDisplay.exist) _id = this.__getHighestID(this.__imagesToDisplay);

		for (let i = 0; i < files.length; ++i) {
			++_id;
			await this.__addTo__imagesToDisplay(files[i], _id);

			this.__subject.next({
				_id,
				index: this.__imagesToDisplay.data.length - 1
			});
		}
	}


	private __getHighestID(imagesToDisplay): number {
		let ids = imagesToDisplay.data.map((image: DBImage) => image._id);
		return getMax(ids);
	}


	private async __addTo__imagesToDisplay(file, _id) {
		let image: DBImage = {
			_id, // must never change, must be unique in its library.
			name: file.name,
			src: await getDataURL(file),
			description: '',
			tags: [],
			date: new Date(file.lastModified),
			location: ''
		};

		this.__imagesToDisplay.data.push(image);
	}


}

// @ts-ignore
const FileSaver = require('file-saver');
import { getDateTimeID } from '@writetome51/get-date-time-id';
import { ImageStoreService } from './image-store.service';
import { Injectable } from '@angular/core';
import { isEmpty } from '@writetome51/is-empty-not-empty';


@Injectable({
	providedIn: 'root'
})
export class LibrarySaverService {

	libraryName = '';

	private __extension = '.json';
	private __writeOptions = {type: 'text/plain;charset=utf-8'};


	constructor(private __imageStore: ImageStoreService) {
	}


	save(): void {
		if (isEmpty(this.libraryName)) {
			throw new Error(`The library must be given a name before you save it`);
		}

		let txtToWrite = JSON.stringify(this.__imageStore.images);
		let fileName = (this.libraryName + '-' + getDateTimeID() + this.__extension);

		let file = new File([txtToWrite], fileName, this.__writeOptions);
		FileSaver.saveAs(file);
	}


}

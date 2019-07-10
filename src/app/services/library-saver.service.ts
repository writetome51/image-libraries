// @ts-ignore
const FileSaver = require('file-saver');
import { getDateTimeID } from '@writetome51/get-date-time-id';
import { Injectable } from '@angular/core';
import { isEmpty } from '@writetome51/is-empty-not-empty';
import { LibraryService } from './library.service';


@Injectable({
	providedIn: 'root'
})
export class LibrarySaverService {

	private __extension = '.json';
	private __writeOptions = {type: 'text/plain;charset=utf-8'};


	constructor(private __library: LibraryService) {
	}


	save(): void {
		if (isEmpty(this.__library.name)) {
			throw new Error(`The library must be given a name before you save it`);
		}
		let lib = {name: this.__library.name, images: this.__library.images};
		let txtToWrite = JSON.stringify(lib);

		let fileName = (this.__library.name + '-' + getDateTimeID() + this.__extension);
		let file = new File([txtToWrite], fileName, this.__writeOptions);
		FileSaver.saveAs(file);
	}


}

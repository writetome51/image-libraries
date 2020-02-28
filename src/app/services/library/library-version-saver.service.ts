// @ts-ignore
const FileSaver = require('file-saver');
import { getDateTimeID } from '@writetome51/get-date-time-id';
import { Injectable } from '@angular/core';
import { isEmpty } from '@writetome51/is-empty-not-empty';
import { LoadedLibraryData as library } from '../../data/runtime-state-data/loaded-library.data';


@Injectable({
	providedIn: 'root'
})
export class LibraryVersionSaverService {

	private __extension = '.json';
	private __writeOptions = {type: 'text/plain;charset=utf-8'};


	save(): void {
		if (isEmpty(library.data.name)) {
			throw new Error(`The library must be given a name before you save it`);
		}
		let txtToWrite = JSON.stringify(library.data);
		let fileName = (library.data.name + '-' + getDateTimeID() + this.__extension);

		let file = new File([txtToWrite], fileName, this.__writeOptions);
		FileSaver.saveAs(file);
	}


}

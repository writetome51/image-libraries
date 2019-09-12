import { getObjectFromJSON } from 'get-object-from-json';
import { Injectable } from '@angular/core';
import { LibraryService } from './library.service';


@Injectable({
	providedIn: 'root'
})
export class LibraryReaderService {


	private __doneReading = false;


	constructor(
		private __library: LibraryService
	) {
	}


	get doneReading(): boolean {
		return this.__doneReading;
	}


	async read(library: File) {
		if (!library) throw new Error(`The library to read is a falsy value.`);

		const reader = new FileReader();

		reader.onload = () => {
			this.__doneReading = false;
			this.__library.contents = getObjectFromJSON(reader.result);
			this.__doneReading = true;
		};

		reader.readAsText(library, 'utf-8');
	}


}

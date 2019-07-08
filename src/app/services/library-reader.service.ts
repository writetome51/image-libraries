import { getObjectFromJSON } from 'get-object-from-json';
import { Injectable } from '@angular/core';
import { ImageStoreService } from './image-store.service';


@Injectable({
	providedIn: 'root'
})
export class LibraryReaderService {


	private __doneReading = false;


	constructor(private __imageStore: ImageStoreService) {
	}


	get doneReading(): boolean {
		return this.__doneReading;
	}


	async read(library: File) {
		if (!library) throw new Error(`The library to read is a falsy value.`);

		const reader = new FileReader();

		reader.onload = () => {
			this.__doneReading = false;
			let json: any = reader.result;
			this.__imageStore.images = getObjectFromJSON(json);
			this.__doneReading = true;
		};

		reader.readAsText(library, 'utf-8');
	}


}

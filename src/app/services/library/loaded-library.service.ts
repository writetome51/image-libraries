import { hasValue } from '@writetome51/has-value-no-value';
import { Injectable } from '@angular/core';
import { LoadedLibrary } from '../../interfaces/loaded-library';
import { GetRequestedLibraryService } from './get-requested-library.service';


@Injectable({providedIn: 'root'})

export class LoadedLibraryService {

	private __data;


	get data(): LoadedLibrary {
		return this.__data;
	}


	constructor(private __getRequestedLibrary: GetRequestedLibraryService) {
	}


	async set_data() {
		let result: LoadedLibrary | void = await this.__getRequestedLibrary.go();

		if (hasValue(result)) this.__data = result;
	}


	unset_data() {
		this.__data = undefined;
	}

}

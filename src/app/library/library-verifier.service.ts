import { noValue } from '@writetome51/has-value-no-value';
import { Injectable } from '@angular/core';
import { GetLibraryNamesProcessorService }
	from '../services/data-transport-processor/get-library-names-processor.service';
import { LibraryNamesData as libraryNames }
	from '../../data-structures/runtime-state-data/static-classes/library-names.data';
import { isEmpty } from '@writetome51/is-empty-not-empty';


@Injectable({providedIn: 'root'})

export class LibraryVerifierService {

	constructor(private __getLibraryNamesProcessor: GetLibraryNamesProcessorService) {
	}


	async verify(libName): Promise<boolean> {
		if (noValue(libraryNames.data) || isEmpty(libraryNames.data)) {
			await this.__getLibraryNamesProcessor.process();
		}
		return libraryNames.data.includes(libName);
	}

}

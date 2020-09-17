import { GetLibrariesProcessorService }
	from '@data-transport-processor/get-libraries-processor/get-libraries-processor.service';
import { Injectable } from '@angular/core';
import { isEmpty } from '@writetome51/is-empty-not-empty';
import { LibraryNamesData as libraryNames }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { noValue } from '@writetome51/has-value-no-value';


@Injectable({providedIn: 'root'})

export class LibraryVerifierService {

	constructor(private __getLibrariesProcessor: GetLibrariesProcessorService) {
	}


	async verify(libName): Promise<boolean> {
		if (noValue(libraryNames.data) || isEmpty(libraryNames.data)) {
			await this.__getLibrariesProcessor.process();
		}
		return libraryNames.data.includes(libName);
	}

}

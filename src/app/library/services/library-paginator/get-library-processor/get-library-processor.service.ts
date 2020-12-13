import { DataTransportProcessorService }
	from '@services/data-transport-processor/data-transport-processor.service';
import { Injectable } from '@angular/core';
import { DBLibrary } from '@interfaces/db-library';
import { GetLibraryResultInterpreterService }
	from './get-library-result-interpreter/get-library-result-interpreter.service';
import { GetRequestedLibraryService } from './get-requested-library.service';


@Injectable({providedIn: 'root'})
export class GetLibraryProcessorService extends DataTransportProcessorService {

	constructor(
		private __getRequestedLibrary: GetRequestedLibraryService,
		__getLibraryResultInterpreter: GetLibraryResultInterpreterService
	) {
		super(__getLibraryResultInterpreter);
	}


	protected async _getResult(): Promise<DBLibrary | { error: { message: string } }> {
		return await this.__getRequestedLibrary.go();
	}

}

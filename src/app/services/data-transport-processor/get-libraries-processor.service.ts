import { DataTransportProcessorService } from './data-transport-processor.service';
import { LibraryStorageService } from '../library/library-storage.service';
import { DBLibrary } from '../../interfaces/db-library';
import { GetLibrariesResultInterpreterService }
	from './data-transport-result-interpreter/get-libraries-result-interpreter.service';
import { Injectable } from '@angular/core';


@Injectable({providedIn: 'root'})

export class GetLibrariesProcessorService extends DataTransportProcessorService {

	constructor(
		private __libraryStorage: LibraryStorageService,
		__getLibrariesResultInterpreter: GetLibrariesResultInterpreterService
	) {
		super(__getLibrariesResultInterpreter);
	}


	protected async _getResult(): Promise<DBLibrary[] | { error: object }> {
		return await this.__libraryStorage.getLibraries();
	}

}

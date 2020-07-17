import { DataTransportProcessorService } from '../data-transport-processor.service';
import { LibraryStorageService } from '../../library/library-storage.service';
import { GetLibrariesResultInterpreterService }
	from './get-libraries-result-interpreter.service';
import { Injectable } from '@angular/core';
import { DBLibrary } from '../../../../interfaces/db-library';


@Injectable({providedIn: 'root'})

export class GetLibrariesProcessorService extends DataTransportProcessorService {

	constructor(
		private __libraryStorage: LibraryStorageService,
		__getLibrariesResultInterpreter: GetLibrariesResultInterpreterService
	) {
		super(__getLibrariesResultInterpreter);
	}


	protected async _getResult(): Promise<DBLibrary[] | {error: {message: string}}> {
		return await this.__libraryStorage.getAll();
	}

}

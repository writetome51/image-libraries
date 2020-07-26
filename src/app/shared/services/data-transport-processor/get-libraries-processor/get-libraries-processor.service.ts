import { DataTransportProcessorService } from '../data-transport-processor.service';
import { DBLibrary } from '@interfaces/db-library';
import { GetLibrariesResultInterpreterService } from './get-libraries-result-interpreter.service';
import { Injectable } from '@angular/core';
import { LibraryStorageService } from '../../library/library-storage.service';


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

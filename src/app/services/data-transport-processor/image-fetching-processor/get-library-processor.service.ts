import { DataTransportProcessorService } from '../data-transport-processor.service';
import { Injectable } from '@angular/core';
import { LibraryStorageService } from '../../library/library-storage.service';
import { DBLibrary } from '../../../../interfaces/db-library';
import { GetLibraryResultInterpreterService }
	from '../data-transport-result-interpreter/get-library-result-interpreter.service';
import { ImageFetchingProcessorService } from './image-fetching-processor.service';


@Injectable({providedIn: 'root'})

export class GetLibraryProcessorService extends DataTransportProcessorService
	implements ImageFetchingProcessorService {

	constructor(
		private __libraryStorage: LibraryStorageService,
		__getLibraryResultInterpreter: GetLibraryResultInterpreterService
	) {
		super(__getLibraryResultInterpreter);
	}


	protected async _getResult(): Promise<DBLibrary | { error: object }> {
		return await this.__libraryStorage.get();
	}

}

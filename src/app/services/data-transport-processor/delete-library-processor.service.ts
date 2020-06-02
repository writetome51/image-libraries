import { Injectable } from '@angular/core';
import { DataTransportProcessorService } from './data-transport-processor.service';
import { LibraryDeleterService } from '../library/library-deleter.service';
import { DeleteLibraryResultInterpreterService }
	from './data-transport-result-interpreter/delete-library-result-interpreter.service';


@Injectable({providedIn: 'root'})

export class DeleteLibraryProcessorService extends DataTransportProcessorService {

	constructor(
		private __libraryDeleter: LibraryDeleterService,
		__deleteLibraryResultInterpreter: DeleteLibraryResultInterpreterService
	) {
		super(__deleteLibraryResultInterpreter);
	}


	protected async _getResult(): Promise<any | { error: object }> {
		return await this.__libraryDeleter.delete();
	}

}

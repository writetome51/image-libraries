import { Injectable } from '@angular/core';
import { DataTransportProcessorService }
	from '../../../shared/services/data-transport-processor/data-transport-processor.service';
import { LibraryDeleterService } from './library-deleter.service';
import { DeleteLibraryResultInterpreterService } from './delete-library-result-interpreter.service';


@Injectable({providedIn: 'root'})

export class DeleteLibraryProcessorService extends DataTransportProcessorService {

	constructor(
		private __libraryDeleter: LibraryDeleterService,
		__deleteLibraryResultInterpreter: DeleteLibraryResultInterpreterService
	) {
		super(__deleteLibraryResultInterpreter);
	}


	protected async _getResult(): Promise<{ success: true } | { error: { message: string } }>
	{
		return await this.__libraryDeleter.delete();
	}

}

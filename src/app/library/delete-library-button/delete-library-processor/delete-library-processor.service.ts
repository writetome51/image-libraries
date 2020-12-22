import { DataTransportProcessorService }
	from '@data-transport-processor/data-transport-processor.service';
import { DeleteLibraryResultInterpreterService } from './delete-library-result-interpreter.service';
import { Injectable } from '@angular/core';
import { LibraryDeleterService }
	from '@app/library/delete-library-button/delete-library-processor/library-deleter.service';


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

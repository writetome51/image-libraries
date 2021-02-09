import { DataTransportProcessorService }
	from '@data-transport-processor/data-transport-processor.service';
import { DeleteLibraryResultInterpreterService }
	from './delete-library-result-interpreter/delete-library-result-interpreter.service';
import { Injectable } from '@angular/core';
import { DeleteLibraryService } from './delete-library.service';
import { HasError } from '@interfaces/has-error.interface';


@Injectable({providedIn: 'root'})
export class DeleteLibraryProcessorService extends DataTransportProcessorService {

	constructor(
		private __deleteLibrary: DeleteLibraryService,
		__resultInterpreter: DeleteLibraryResultInterpreterService
	) {
		super(__resultInterpreter);
	}


	protected async _getResult(): Promise<{ success: true } | HasError> {
		return await this.__deleteLibrary.go();
	}

}

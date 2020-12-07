import { DataTransportProcessorService }
	from '@data-transport-processor/data-transport-processor.service';
import { Injectable } from '@angular/core';
import { LibraryUpdaterService } from './library-updater.service';
import { UpdateLibraryResultInterpreterService }
	from '@services/library/update-library-processor/update-library-result-interpreter.service';


@Injectable({providedIn: 'root'})

export class UpdateLibraryProcessorService extends DataTransportProcessorService {

	constructor(
		private __libraryUpdater: LibraryUpdaterService,
		__updateLibraryResultInterpreter: UpdateLibraryResultInterpreterService
	) {
		super(__updateLibraryResultInterpreter);
	}


	protected async _getResult(): Promise<any> {
		return await this.__libraryUpdater.update();
	}

}
import { Injectable } from '@angular/core';
import { DataTransportProcessorService } from '../data-transport-processor.service';
import { LibraryUpdaterService } from '../../library/library-updater.service';
import { UpdateLibraryResultInterpreterService }
	from '../data-transport-result-interpreter/update-library-result-interpreter.service';


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

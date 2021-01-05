import { DataTransportProcessorService }
	from '@services/data-processor/data-transport-processor/data-transport-processor.service';
import { Injectable } from '@angular/core';
import { LoadedLibraryUpdaterService } from './loaded-library-updater.service';
import { UpdateLibraryResultInterpreterService }
	from '@services/library/update-library-processor/update-library-result-interpreter.service';


@Injectable({providedIn: 'root'})
export class UpdateLibraryProcessorService extends DataTransportProcessorService {

	constructor(
		private __libraryUpdater: LoadedLibraryUpdaterService,
		__updateLibraryResultInterpreter: UpdateLibraryResultInterpreterService
	) {
		super(__updateLibraryResultInterpreter);
	}


	protected async _getResult(): Promise<any> {
		return await this.__libraryUpdater.update();
	}

}

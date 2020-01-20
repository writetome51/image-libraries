import { Injectable } from '@angular/core';
import { DataTransportProcessorService } from './data-transport-processor.service';
import { LibraryUpdaterService } from '../library/library-updater.service';


@Injectable({providedIn: 'root'})

export class UpdateLibraryProcessorService extends DataTransportProcessorService {

	constructor(
		private __libraryUpdater: LibraryUpdaterService,
		__updateLibraryResultInterpreter
	) {
		super(__updateLibraryResultInterpreter);
	}


	protected async _getResult(): Promise<any> {
		return await this.__libraryUpdater.update();
	}

}

import { Injectable } from '@angular/core';
import { DirectProcessor } from '@interfaces/direct-processor';
import { LibraryStorageService } from '@services/library/library-storage.service';


@Injectable({providedIn: 'root'})

export class ToggleAddToRemoveFromLibraryProcessorService implements DirectProcessor {

	process(data: { image_id: string, checked: boolean }) {

	}


	constructor(private __libraryStorage: LibraryStorageService) {
	}

}

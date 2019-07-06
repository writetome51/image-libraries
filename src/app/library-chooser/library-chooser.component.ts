import { Component } from '@angular/core';
import { LibraryReaderService } from '../services/library-reader.service';
import { LoadedLibraryStoreService } from '../services/loaded-library-store.service';


@Component({
	selector: 'library-chooser',
	templateUrl: './library-chooser.component.html'
})
export class LibraryChooserComponent {


	constructor(
		private __libraryReader: LibraryReaderService,
		private __loadedLibraryStore: LoadedLibraryStoreService
	) {
	}


	get prompt(): string {
		return (this.__libraryReader.doneReading ? 'Choose different library:' : 'Choose library:');
	}


	readLibrary(library: File) {
		this.__loadedLibraryStore.library = library;
		this.__libraryReader.read(library);
	}


	reloadLibrary() {
		this.__libraryReader.read(this.__loadedLibraryStore.library);
	}

}

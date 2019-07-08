import { Injectable } from '@angular/core';


@Injectable({
	providedIn: 'root'
})
export class LoadedLibraryService {

	file: File;


	get name(): string {
		return this.file.name;
	}


}

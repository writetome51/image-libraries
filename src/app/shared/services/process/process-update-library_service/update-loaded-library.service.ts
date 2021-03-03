import { Injectable } from '@angular/core';
import { GetUserLibrariesService } from '@services/db-related/get-user-libraries.service';
import { IDoThis } from '@interfaces/i-do-this.interface';


@Injectable({providedIn: 'root'})
export class UpdateLoadedLibraryService implements IDoThis {

	constructor(
		private __libraryStorage: GetUserLibrariesService,
	) {
	}


	async go(): Promise<any> {
	}


}

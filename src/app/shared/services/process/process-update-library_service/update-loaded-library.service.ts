import { Injectable } from '@angular/core';
import { GetLibrariesService } from '@db/get-libraries.service';
import { IDoThis } from '@interfaces/i-do-this.interface';


@Injectable({providedIn: 'root'})
export class UpdateLoadedLibraryService implements IDoThis {

	constructor(private __libraryStorage: GetLibrariesService) {}


	async go(): Promise<any> {}


}

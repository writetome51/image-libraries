import { IDoThis } from '@interfaces/i-do-this.interface';
import { Injectable } from '@angular/core';


@Injectable({providedIn: 'root'})
export class RunTasksAfterStoringImageFilesService implements IDoThis {

	constructor() {}


	async go(result) {
	}

}

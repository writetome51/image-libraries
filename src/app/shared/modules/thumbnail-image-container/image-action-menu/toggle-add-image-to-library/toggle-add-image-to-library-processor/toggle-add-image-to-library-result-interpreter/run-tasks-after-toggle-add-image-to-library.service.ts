import { Injectable } from '@angular/core';
import { IDoThis } from '@interfaces/i-do-this.interface';


@Injectable({providedIn: 'root'})
export class RunTasksAfterToggleAddImageToLibraryService implements IDoThis {

	go(data: { checked: boolean }) {
		data.checked = !(data.checked);
	}

}
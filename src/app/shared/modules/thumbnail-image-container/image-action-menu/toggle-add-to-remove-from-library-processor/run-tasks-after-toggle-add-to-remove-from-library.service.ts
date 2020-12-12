import { Injectable } from '@angular/core';
import { IDoThis } from '@interfaces/i-do-this';


@Injectable({providedIn: 'root'})

export class RunTasksAfterToggleAddToRemoveFromLibraryService implements IDoThis {

	go(data: { checked: boolean }) {
		data.checked = !(data.checked);
	}

}

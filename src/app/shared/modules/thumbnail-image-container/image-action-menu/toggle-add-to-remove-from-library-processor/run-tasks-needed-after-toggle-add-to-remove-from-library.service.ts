import { Injectable } from '@angular/core';
import { IDoThis } from '@interfaces/i-do-this';


@Injectable({providedIn: 'root'})

export class RunTasksNeededAfterToggleAddToRemoveFromLibraryService implements IDoThis {

	go(data: { checked: boolean }): void {
		data.checked = !(data.checked);
	}

}

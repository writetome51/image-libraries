import { IDoThis } from '@interfaces/i-do-this.interface';
import { Injectable } from '@angular/core';
import { SearchResultsData as searchResults }
	from '@runtime-state-data/static-classes/auto-resettable.data';


@Injectable({providedIn: 'root'})
export class RunTasksAfterSearchService implements IDoThis {

	go(result: object[]) {
		searchResults.data = result;
	}

}

import { Injectable } from '@angular/core';
import { DirectProcessor } from '../../../../interfaces/direct-processor';
import { DBLibrary } from '../../../../interfaces/db-library';
import { CurrentUserLibrariesData as libraries }
	from '../../../../data/current-user-libraries.data';


@Injectable({providedIn: 'root'})

export class GetLibrariesResultProcessorService implements DirectProcessor {

	async process(result: DBLibrary[]) {
		libraries.data = result.map((library: DBLibrary) => library.name);
	}

}

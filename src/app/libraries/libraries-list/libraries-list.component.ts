import { Component } from '@angular/core';
import { CurrentUserLibrariesService as libraries }
	from '../../services/library/current-user-libraries.service';
import { noValue } from '@writetome51/has-value-no-value';
import { GetLibrariesProcessorService }
	from '../../services/data-transport-processor/get-libraries-processor.service';


@Component({
	selector: 'libraries-list',
	templateUrl: './libraries-list.component.html'
})
export class LibrariesListComponent {

	noLibrariesMessage = 'You have no libraries right now';


	get libraries(): string[] {
		return libraries.data;
	}


	constructor(private __getLibrariesProcessor: GetLibrariesProcessorService) {
		if (noValue(libraries.data)) this.__getLibrariesProcessor.process();
	}

}

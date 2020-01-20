import { Component } from '@angular/core';
import { DataProcessorComponent } from '../../data-processor.component';
import { UpdateLibraryProcessorService }
	from '../../services/data-transport-processor/update-library-processor.service';


@Component({
	selector: 'save-changes-button',
	template: `
		<processing-button [context]="this" [clickHandler]="process">
			Save Changes
		</processing-button>
	`
})
export class SaveChangesButtonComponent extends DataProcessorComponent {

	constructor(__updateLibraryProcessor: UpdateLibraryProcessorService) {
		super(__updateLibraryProcessor);
	}

}

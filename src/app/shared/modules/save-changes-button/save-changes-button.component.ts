import { Component, Input } from '@angular/core';
import { StartDataProcessContainerComponent }
	from '@abstract-components/start-data-process-container.component';
import { Processor } from '@interfaces/processor';


@Component({
	selector: 'save-changes-button',
	template: `
		<start-data-process-button [type]="'submit'" [container]="this">
			{{label}}
		</start-data-process-button>
	`
})
export class SaveChangesButtonComponent extends StartDataProcessContainerComponent {

	@Input() label = 'Save';

	@Input() set processor(value: Processor) {
		this._processor = value;
	}

}

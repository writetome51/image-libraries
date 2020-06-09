import { Component, Input } from '@angular/core';
import { ProcessingButtonOperationStatusData }
	from '../../data-structures/runtime-state-data/processing-button-operation-status.data';
import { StartDataProcessComponent } from '../start-data-process.component';


@Component({
	selector: 'start-data-process-button',
	templateUrl: './start-data-process-button.component.html',
	styleUrls: ['./start-data-process-button.component.css']
})
export class StartDataProcessButtonComponent {

	// If 'submit', it's automatically clicked when pressing RETURN in a form
	@Input() type: 'button' | 'submit' = 'button';

	// required.  Instance of the component this component is used in.
	@Input() context: StartDataProcessComponent;

	clicked = false;

	operationStatus = ProcessingButtonOperationStatusData;


	async run_clickHandler(event) {
		event.preventDefault();

		this.clicked = true;
		await this.context.start();
		this.clicked = false;
	}


}

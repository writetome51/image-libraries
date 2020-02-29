import { Component, Input } from '@angular/core';
import { ProcessingButtonOperationStatusData }
	from '../data/runtime-state-data/processing-button-operation-status.data';


@Component({
	selector: 'processing-button',
	templateUrl: './processing-button.component.html',
	styleUrls: ['./processing-button.component.css']
})
export class ProcessingButtonComponent {

	// If 'submit', it's automatically clicked when pressing RETURN in a form
	@Input() type: 'button' | 'submit' = 'button';

	@Input() context: object; // required.  Instance of the component this component is used in.

	@Input() clickHandler: () => void; // required.  Method belonging to this.context.

	clicked = false;

	operationStatus = ProcessingButtonOperationStatusData;


	async run_clickHandler(event) {
		event.preventDefault();

		this.clicked = true;
		await this.clickHandler.apply(this.context);
		this.clicked = false;
	}


}

import { Component, Input } from '@angular/core';
import { DataOperationStatusService } from '../services/data-operation-status.service';


@Component({
	selector: 'processing-button',
	templateUrl: './processing-button.component.html'
})
export class ProcessingButtonComponent {

	// If 'submit', it's automatically clicked when pressing RETURN in a form
	@Input() type: 'button' | 'submit' = 'button';

	@Input() context: object; // required.  Instance of component this component is used in.

	@Input() clickHandler: () => void; // required.  Method belonging to this.context.

	clicked = false;

	dataOperationStatus = DataOperationStatusService;


	async run_clickHandler() {
		this.clicked = true;
		await this.clickHandler.apply(this.context);
		this.clicked = false;
	}

}

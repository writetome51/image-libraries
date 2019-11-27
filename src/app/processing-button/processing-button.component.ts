import { Component, Input } from '@angular/core';
import { DataOperationStatusService } from '../services/data-operation-status.service';


@Component({
	selector: 'app-processing-button',
	templateUrl: './processing-button.component.html'
})
export class ProcessingButtonComponent {

	@Input() buttonLabel = 'Button';

	// If 'submit', it's automatically clicked when pressing RETURN in a form
	@Input() type: 'button' | 'submit' = 'button';

	@Input() clickHandler: [object, () => void]; // object is caller, functon is method of object.

	dataOperationStatus = DataOperationStatusService;


	runClickHandler() {
		let [obj, method] = this.clickHandler;
		method.apply(obj);
	}

}

import { Component, Input } from '@angular/core';
import { DataOperationStatusService } from '../services/data-operation-status.service';


@Component({
	selector: 'app-processing-button',
	templateUrl: './processing-button.component.html',
	styleUrls: ['./processing-button.component.sass']
})
export class ProcessingButtonComponent {

	@Input() buttonLabel: string;

	// If 'submit', it's automatically clicked when pressing RETURN in a form
	@Input() type: 'button' | 'submit';

	@Input() clickHandler: () => void;

	dataOperationStatus = DataOperationStatusService;

}

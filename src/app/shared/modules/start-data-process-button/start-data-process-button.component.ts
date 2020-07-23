import { Component, Input } from '@angular/core';
import { StartDataProcessElementComponent }
	from '../../abstract-components/start-data-process-element.component';


@Component({
	selector: 'start-data-process-button',
	templateUrl: './start-data-process-button.component.html',
	styleUrls: ['./start-data-process-button.component.css']
})
export class StartDataProcessButtonComponent extends StartDataProcessElementComponent {

	// If 'submit', it's automatically clicked when pressing RETURN in a form
	@Input() type: 'button' | 'submit' = 'button';

}

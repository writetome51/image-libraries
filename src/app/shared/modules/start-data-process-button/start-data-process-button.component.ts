import { Component, Input } from '@angular/core';
import { ClickStartDataProcessElementComponent }
	from '@abstract-components/click-start-data-process-element.component';


@Component({
	selector: 'start-data-process-button',
	templateUrl: './start-data-process-button.component.html',
	styleUrls: ['./start-data-process-button.component.css']
})
export class StartDataProcessButtonComponent extends ClickStartDataProcessElementComponent {

	// If 'submit', it's automatically clicked when pressing RETURN in a form
	@Input() type: 'button' | 'submit' = 'button';

}

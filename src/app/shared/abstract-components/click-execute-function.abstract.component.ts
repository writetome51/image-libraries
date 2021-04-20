import { ClickStartedExecutionStatusData }
	from '@runtime-state-data/click-started-execution-status.data';
import { ClickExecuteFunctionContainerComponent }
	from './click-execute-function-container.abstract.component';
import { Component, Input } from '@angular/core';


@Component({selector: '', template: ''}) // prevents Angular build error
export abstract class ClickExecuteFunctionComponent {

	// required.  Instance of the component this component is used in.
	@Input() container: ClickExecuteFunctionContainerComponent;

	// Passed to this.container.execute()
	@Input() funcArgs: any[] = [];

	clicked = false;
	executionStatus = ClickStartedExecutionStatusData;


	async execute(event) {
		event.preventDefault();
		event.stopPropagation();

		this.clicked = true;
		await this.container.execute(this.funcArgs);
		this.clicked = false;
	}

}

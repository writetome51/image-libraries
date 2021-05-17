import { ClickStartedExecutionStatusData }
	from '@runtime-state-data/click-started-execution-status.data';
import { ClickExecuteFunctionContextComponent }
	from './click-execute-function-context.abstract.component';
import { Component, Input } from '@angular/core';


@Component({selector: '', template: ''}) // prevents Angular build error
export abstract class ClickExecuteFunctionComponent {

	// required.  Instance of the component this component is used in.
	@Input() context: ClickExecuteFunctionContextComponent;

	// Passed to this.container.execute()
	@Input() funcArgs: any[] = [];

	clicked = false;
	executionStatus = ClickStartedExecutionStatusData;


	async execute(event) {
		event.preventDefault();
		event.stopPropagation();

		this.clicked = true;
		await this.context.execute(this.funcArgs);
		this.clicked = false;
	}

}

import { ClickStartedExecutionStatusData }
	from '@runtime-state-data/click-started-execution-status.data';
import { Input } from '@angular/core';
import { StartFunctionExecutionContainerComponent }
	from './start-function-execution-container.component';


export abstract class ClickStartFunctionExecutionComponent {

	// required.  Instance of the component this component is used in.
	@Input() container: StartFunctionExecutionContainerComponent;

	// Passed to this.container.start()
	@Input() funcArgs: any[] = [];

	clicked = false;
	executionStatus = ClickStartedExecutionStatusData;


	async runClickHandler(event) {
		event.preventDefault();
		event.stopPropagation();

		this.clicked = true;
		await this.container.start(this.funcArgs);
		this.clicked = false;
	}


}

import { Input } from '@angular/core';
import { StartDataProcessContainerComponent } from './start-data-process-container.component';
import { ClickStartedProcessingStatusData }
	from '@runtime-state-data/click-started-processing-status.data';



export abstract class ClickStartDataProcessComponent {

	// required.  Instance of the component this component is used in.
	@Input() context: StartDataProcessContainerComponent;

	// Passed to this.context.start()
	@Input() processArgs: any[] = [];

	clicked = false;
	processingStatus = ClickStartedProcessingStatusData;


	async runClickHandler(event) {
		event.preventDefault();

		this.clicked = true;
		await this.context.start(this.processArgs);
		this.clicked = false;
	}


}

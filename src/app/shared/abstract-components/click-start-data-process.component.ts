import { ClickStartedProcessingStatusData }
	from '@runtime-state-data/click-started-processing-status.data';
import { Input } from '@angular/core';
import { StartDataProcessContainerComponent } from './start-data-process-container.component';


export abstract class ClickStartDataProcessComponent {

	// required.  Instance of the component this component is used in.
	@Input() container: StartDataProcessContainerComponent;

	// Passed to this.container.start()
	@Input() processArgs: any[] = [];

	clicked = false;
	processingStatus = ClickStartedProcessingStatusData;


	async runClickHandler(event) {
		event.preventDefault();
		event.stopPropagation();

		this.clicked = true;
		await this.container.start(this.processArgs);
		this.clicked = false;
	}


}

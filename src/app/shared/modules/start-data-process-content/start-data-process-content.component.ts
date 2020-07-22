import { Component, Input } from '@angular/core';
import { ClickInitiatedProcessingStatusData }
	from '../../../../data-structures/runtime-state-data/click-initiated-processing-status.data';
import { StartDataProcessElementComponent } from '../../../start-data-process-element.component';


@Component({
	selector: 'start-data-process-content',
	templateUrl: './start-data-process-content.component.html'
})
export class StartDataProcessContentComponent extends StartDataProcessElementComponent {

	operationStatus = ClickInitiatedProcessingStatusData;

}

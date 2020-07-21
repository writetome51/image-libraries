import { Component, Input } from '@angular/core';
import { ProcessingButtonOperationStatusData }
	from '../../data-structures/runtime-state-data/processing-button-operation-status.data';
import { StartDataProcessElementComponent } from '../start-data-process-element.component';


@Component({
	selector: 'start-data-process-content',
	templateUrl: './start-data-process-content.component.html'
})
export class StartDataProcessContentComponent extends StartDataProcessElementComponent {

	operationStatus = ProcessingButtonOperationStatusData;

}

import { StartFunctionExecutionContainerComponent }
	from '@abstract-components/start-function-execution-container.component';
import { Processor } from '@interfaces/processor';


export abstract class StartProcessContainerComponent
	extends StartFunctionExecutionContainerComponent {

	constructor(protected _processor?: Processor) {
		super();
	}


	protected _func(...args) {
		this._processor.process(...args);
	}

}

import { ClickExecuteFunctionContainerComponent }
	from '@abstract-components/click-execute-function-container.abstract.component';
import { Process } from '@interfaces/process.interface';


export abstract class ClickExecuteProcessContainerComponent
	extends ClickExecuteFunctionContainerComponent {

	constructor(protected _process?: Process) {
		super();
	}


	protected async _func(...args) {
		await this._process.go(...args);
	}

}

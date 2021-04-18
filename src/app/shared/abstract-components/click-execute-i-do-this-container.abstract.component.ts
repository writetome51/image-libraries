import { ClickExecuteFunctionContainerComponent }
	from '@abstract-components/click-execute-function-container.abstract.component';
import { IDoThis } from '@interfaces/i-do-this.interface';


export abstract class ClickExecuteIDoThisContainerComponent
	extends ClickExecuteFunctionContainerComponent {

	constructor(protected _iDoThis?: IDoThis) {
		super();
	}


	protected async _func(...args) {
		await this._iDoThis.go(...args);
	}

}

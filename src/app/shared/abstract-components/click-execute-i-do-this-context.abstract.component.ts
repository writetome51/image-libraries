import { ClickExecuteFunctionContextComponent }
	from '@abstract-components/click-execute-function-context.abstract.component';
import { IDoThis } from '@interfaces/i-do-this.interface';


export abstract class ClickExecuteIDoThisContextComponent
	extends ClickExecuteFunctionContextComponent {

	constructor(protected _iDoThis?: IDoThis) {
		super();
	}


	protected async _func(...args) {
		await this._iDoThis.go(...args);
	}

}

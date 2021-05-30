export abstract class ClickExecuteFunctionContextDirective {

	async execute(funcArgs = []) {
		await this._func(...funcArgs);
	}


	protected abstract _func(...args): any;

}

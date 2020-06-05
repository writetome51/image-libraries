import { ValidatingNumberInputService } from '@writetome51/validating-inputs';


export abstract class JumpToPageNumberInputService extends ValidatingNumberInputService {

	private __pageNumber = 1;


	constructor(
		protected _paginator: { totalPages: number, set_currentPageNumber: (value) => void }
	) {
		super();

		this.data.id = 'jump-to-page-number-input';
		this.data.label = 'Jump To Page';
		this.data.objectToBind = this;
		this.data.propertyToBind = '__pageNumber';

		this.data.isValid = () => {
			if (this.__pageNumber === undefined) this.__pageNumber = 1;
			this.__pageNumber *= 1; // coerced to number.

			// Instead of returning false if not valid, we're forcing the entered value
			// to be valid, and always returning true.
			if (this.__pageNumber < 1) this.__pageNumber = 1;

			if (this.__pageNumber > this._paginator.totalPages) {
				this.__pageNumber = this._paginator.totalPages;
			}

			return true;
		};

		this.data.hideLabel = false;
		this.data.hidePlaceholder = true;
		this.data.min = 1;
	}


	setMax(): void {
		try {
			this.data.max = this._paginator.totalPages;
		}
		catch (e) {
			throw new Error(
				`The paginator's "totalPages" property is still undefined.  You can't call setMax() yet`
			);
		}
	}

}

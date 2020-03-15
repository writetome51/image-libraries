import { ValidatingNumberInputService } from '@writetome51/validating-inputs';


export abstract class JumpToPageNumberInputService extends ValidatingNumberInputService {

	constructor(
		protected _pageJumper: { pageNumber: number, totalPages: number }
	) {
		super();

		this.data.id = 'jump-to-page-number-input';
		this.data.label = 'Jump To Page';
		this.data.objectToBind = this._pageJumper;
		this.data.propertyToBind = 'pageNumber';

		this.data.isValid = () => {
			// Instead of returning false if not valid, here we force the entered value
			// to be valid and always return true.
			if (this.data.objectToBind[this.data.propertyToBind] < 1) {
				this.data.objectToBind[this.data.propertyToBind] = 1;
			}
			if (this.data.objectToBind[this.data.propertyToBind] > this._pageJumper.totalPages) {
				this.data.objectToBind[this.data.propertyToBind] = this._pageJumper.totalPages;
			}
			return true;
		};

		this.data.hideLabel = false;
		this.data.hidePlaceholder = true;
		this.data.min = 1;
	}


	setMax(): void {
		try {
			this.data.max = this._pageJumper.totalPages;
		}
		catch (e) {
			throw new Error(
				`The paginator's "totalPages" property is still undefined.  You can't call setMax() yet`
			);
		}
	}

}

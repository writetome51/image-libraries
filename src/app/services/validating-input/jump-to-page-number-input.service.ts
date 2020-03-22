import { ValidatingNumberInputService } from '@writetome51/validating-inputs';
import { Router } from '@angular/router';
import { removeTail } from '@writetome51/array-remove-head-tail';


export abstract class JumpToPageNumberInputService extends ValidatingNumberInputService {

	private __pageNumber: number;


	constructor(
		protected _paginator: { totalPages: number, set_currentPageNumber: (value) => void },
		private __router: Router
	) {
		super();

		this.data.id = 'jump-to-page-number-input';
		this.data.label = 'Jump To Page';
		this.data.objectToBind = this;
		this.data.propertyToBind = '__pageNumber';

		this.data.isValid = () => {
			if (this.__pageNumber === undefined) this.__pageNumber = 1;
			this.__pageNumber *= 1; // coerce to number.

			// Instead of returning false if not valid, we're forcing the entered value
			// to be valid, and always returning true.
			if (this.__pageNumber < 1) this.__pageNumber = 1;

			if (this.__pageNumber > this._paginator.totalPages) {
				this.__pageNumber = this._paginator.totalPages;
			}

			//	let route = this.getRouteUpTo_butNotIncluding_pageNumber();
			//	this.__router.navigate([route, this.data.objectToBind[this.data.propertyToBind]]);

			return true;
		};

		this.data.hideLabel = false;
		this.data.hidePlaceholder = true;
		this.data.min = 1;
	}


	getRouteUpTo_butNotIncluding_pageNumber(): string {
		let parts = this.__router.routerState.snapshot.url.split('/');
		removeTail(1, parts);
		return parts.join('/');
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

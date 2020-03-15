export abstract class PageJumperService {

	get data(): number {
		return this.__paginator.currentPageNumber;
	}


	set data(value) {
		this.__paginator.set_currentPageNumber(value);
	}


	constructor(
		private __paginator: { currentPageNumber: number, set_currentPageNumber: (value) => void }
	) {
	}

}

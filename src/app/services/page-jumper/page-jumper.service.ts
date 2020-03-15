export abstract class PageJumperService {

	get pageNumber(): number {
		return this.__paginator.currentPageNumber;
	}


	set pageNumber(value) {
		this.__paginator.set_currentPageNumber(value);
	}


	get totalPages(): number {
		return this.__paginator.totalPages;
	}


	constructor(
		private __paginator: {
			totalPages: number,
			currentPageNumber: number,
			set_currentPageNumber: (value: number) => void
		}
	) {
	}

}

export interface PaginationControlsPaginator {

	getCurrentPageNumber: () => number,

	getTotalPages: () => number,

	setItemsPerPage: (num: number) => any,

	setItemsPerLoad: (num: number) => any

}

export interface BigDatasetPaginatorDataSource {

	dataTotal: number;


	getLoad(
		loadNum: number,
		itemsPerLoad: number,
		isLastLoad: boolean
	): Promise<any[]>

}

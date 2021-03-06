import { AppPaginatorDataSourceService }
	from './app-paginator-data-source_service/app-paginator-data-source.abstract.service';
import { BigDatasetPaginator } from '@writetome51/big-dataset-paginator';
import { LoadConfigurationData as loadConfig }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { noValue } from '@writetome51/has-value-no-value';


export abstract class AppPaginatorService extends BigDatasetPaginator {

	constructor(private __dataSource: AppPaginatorDataSourceService) {
		super(__dataSource);
	}


	async setCurrentPageNumber(num, option = {reload:false}): Promise<void> {
		if (noValue(this.__dataSource.dataTotal) || option.reload) {

			// dataTotal must be reset if option.reload = true, because the only way
			// to be sure data is refreshing from source is if dataTotal gets refreshed too.
			await this.__dataSource.set_dataTotal();
		}
		num = this.__assurePageDoesntExceedLimit(num);

		// If dataTotal is 0, this triggers error in super.setCurrentPageNumber():
		await super.setCurrentPageNumber(num, option).catch(() => {}); // just keep running.
	}


	setItemsPerPage(num: number) {
		// If itemsPerLoad isn't evenly divisible by `num`, this adjusts itemsPerLoad to the next
		// lowest number that is:
		super.setItemsPerPage(num);

		loadConfig.size = this.getItemsPerLoad(); // in case itemsPerLoad was adjusted.
	}


	setItemsPerLoad(num: number) {
		// If `num` isn't evenly divisible by itemsPerPage, this sets itemsPerLoad to the next
		// lowest number that is:
		super.setItemsPerLoad(num);

		// in case itemsPerLoad was adjusted, get its value from the paginator:
		loadConfig.size = this.getItemsPerLoad();
	}


	private __assurePageDoesntExceedLimit(pageNum){
		const totalPages = this.getTotalPages();
		return (pageNum > totalPages ? totalPages : pageNum);
	}

}

import { AppPaginatorDataSourceService }
	from './app-paginator-data-source_service/app-paginator-data-source.abstract.service';
import { BigDatasetPaginator } from '@writetome51/big-dataset-paginator';
import { ConfigurePaginatorService as configurePaginator } from './configure-paginator.service';
import { LoadConfigurationData as loadConfig }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { noValue } from '@writetome51/has-value-no-value';
import { PageSizeInBrowserStorageService }
	from '@browser-storage/page-size-in-browser-storage.service';
import { PageConfigurationData as pageConfig } from '@runtime-state-data/page-configuration.data';


export abstract class AppPaginatorService extends BigDatasetPaginator {

	constructor(
		private __pageSizeInBrowser: PageSizeInBrowserStorageService,
		private __dataSource: AppPaginatorDataSourceService
	) {
		super(__dataSource);
		configurePaginator.go(this, this.__pageSizeInBrowser.get());
	}


	async setCurrentPageNumber(num, option = {reload:false}): Promise<void> {
		if (noValue(this.__dataSource.dataTotal) || option.reload) {

			// dataTotal must be reset if option.reload = true, because the only way
			// to be sure data is refreshing from source is if dataTotal gets refreshed too.
			await this.__dataSource.set_dataTotal();
		}
		// If dataTotal is 0, this triggers error in super.setCurrentPageNumber():
		await super.setCurrentPageNumber(num, option).catch(() => {}); // just keep running.
	}


	setItemsPerPage(num: number) {
		// This may cause itemsPerLoad to adjust so itemsPerLoad / itemsPerPage
		// remains evenly divisible:
		super.setItemsPerPage(num);
		pageConfig.size = this.getItemsPerPage();
		loadConfig.size = this.getItemsPerLoad(); // in case itemsPerLoad was adjusted.
	}


	setItemsPerLoad(num: number) {
		super.setItemsPerLoad(num);
		loadConfig.size = this.getItemsPerLoad();
	}

}

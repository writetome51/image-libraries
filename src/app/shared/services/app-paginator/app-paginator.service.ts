import { AppPaginatorDataSourceService } from './app-paginator-data-source.service';
import { BigDatasetPaginator } from '@writetome51/big-dataset-paginator';
import { LoadData as load }
	from '../../../../data-structures/runtime-state-data/static-classes/resettable-to-default/load.data';
import { PageData as page }
	from '../../../../data-structures/runtime-state-data/static-classes/resettable-to-default/page.data';


export abstract class AppPaginatorService extends BigDatasetPaginator {


	constructor(private __dataSource: AppPaginatorDataSourceService) {
		super(__dataSource);

		this.setItemsPerLoad(load.size);
		this.setItemsPerPage(page.size);
	}


	async resetToFirstPage(): Promise<void> {
		// this.__dataSource.dataTotal must be set before fetching any pages.
		await this.__dataSource.set_dataTotal();

		// If the dataTotal is 0, this will trigger error in super.resetToFirstPage():
		await super.resetToFirstPage().catch(() => {}); // just keep running.
	}


	setItemsPerPage(num: number) {
		super.setItemsPerPage(num);
		page.size = this.getItemsPerPage();
		load.size = this.getItemsPerLoad(); // in case items per load was adjusted.
	}


	setItemsPerLoad(num: number) {
		super.setItemsPerLoad(num);
		load.size = this.getItemsPerLoad();
	}


}

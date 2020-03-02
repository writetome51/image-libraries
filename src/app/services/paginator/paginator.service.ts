import { AppPaginator } from '@writetome51/app-paginator';
import { PaginatorDataSourceService } from './paginator-data-source/paginator-data-source.service';
import { BatchData } from '../../data/runtime-state-data/batch.data';


export abstract class PaginatorService extends AppPaginator {

	constructor(__dataSource: PaginatorDataSourceService) {
		super(__dataSource);

		this.itemsPerBatch = BatchData.size;
	}

}

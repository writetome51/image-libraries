import { Injectable } from '@angular/core';
import { AppPaginator } from '@writetome51/app-paginator';
import { PaginatorDataSourceService } from './paginator-data-source.service';
import { BatchData } from '../../data/runtime-state-data/batch.data';


@Injectable({providedIn: 'root'})

export class PaginatorService extends AppPaginator {

	constructor(__dataSource: PaginatorDataSourceService) {
		super(__dataSource);

		this.itemsPerBatch = BatchData.size;
	}

}

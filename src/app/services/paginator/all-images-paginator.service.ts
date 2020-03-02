import { PaginatorService } from './paginator.service';
import { AllImagesPaginatorDataSourceService }
	from './paginator-data-source/all-images-paginator-data-source.service';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})

export class AllImagesPaginatorService extends PaginatorService {

	constructor(__dataSource: AllImagesPaginatorDataSourceService) {
		super(__dataSource);
	}

}

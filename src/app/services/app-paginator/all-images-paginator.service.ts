import { AppPaginatorService } from './app-paginator.service';
import { AllImagesPaginatorDataSourceService }
	from './app-paginator-data-source/all-images-paginator-data-source.service';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})

export class AllImagesPaginatorService extends AppPaginatorService {

	constructor(__dataSource: AllImagesPaginatorDataSourceService) {
		super(__dataSource);
	}

}

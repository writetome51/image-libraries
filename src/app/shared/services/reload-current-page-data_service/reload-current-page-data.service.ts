import { IDoThis } from '@interfaces/i-do-this.interface';
import { AppPaginatorService } from '@app-paginator/app-paginator.abstract.service';
import { Injectable } from '@angular/core';
import { GetCurrentPaginatorService } from './get-current-paginator.service';


@Injectable({providedIn: 'root'})
export class ReloadCurrentPageDataService implements IDoThis {

	constructor(private __getCurrentPaginator: GetCurrentPaginatorService) {}


	async go() {
		const paginator = this.__getCurrentPaginator.go();

		await this.__reloadCurrentPage(paginator);
	}


	private async __reloadCurrentPage(paginator: AppPaginatorService) {
		let pageNum = paginator.getCurrentPageNumber();
		await paginator.setCurrentPageNumber(pageNum, {reload: true});
	}

}

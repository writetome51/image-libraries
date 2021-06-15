import { IDoThis } from '@interfaces/i-do-this.interface';
import { AppPaginatorService } from '@app-paginator/app-paginator.abstract.service';
import { Injectable } from '@angular/core';
import { GetCurrentPaginatorService } from '@services/get-current-paginator.service';


@Injectable({providedIn: 'root'})
export class ReloadCurrentPageDataService implements IDoThis {

	constructor(private __getCurrentPaginator: GetCurrentPaginatorService) {}


	async go() {
		const paginator = this.__getCurrentPaginator.go();

		await this.__reloadCurrentPageData(paginator);
	}


	private async __reloadCurrentPageData(paginator: AppPaginatorService) {
		let pageNum = paginator.getCurrentPageNumber();
		await paginator.setCurrentPageNumber(pageNum, {reload: true});
	}

}

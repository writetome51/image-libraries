import { IDoThis } from '@interfaces/i-do-this.interface';
import { AppPaginatorService } from '@app-paginator/app-paginator.abstract.service';
import { SetCurrentPageImagesService as setCurrentPageImages }
	from '@services/set-current-page-images.service';


export class __ReloadCurrentPageDataService {

	static async go(paginator: AppPaginatorService) {
		let pageNum = paginator.getCurrentPageNumber();
		await setCurrentPageImages.go(pageNum, paginator, {reload: true});
	}

}

export const ReloadCurrentPageDataService: IDoThis = __ReloadCurrentPageDataService;

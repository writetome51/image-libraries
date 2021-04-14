import { ImageRecord } from '@interfaces/image-record.interface';
import { GetPageImagesService as getPageImages } from '@services/get-page-images.service';
import { AppPaginatorService } from '@app-paginator/app-paginator.abstract.service';


export abstract class ImagesListComponent {

	get images(): ImageRecord[] {
		return getPageImages.go(this.__paginator);
	}


	constructor(private __paginator: AppPaginatorService) {}

}

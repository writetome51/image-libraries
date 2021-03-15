import { DBImage } from '@interfaces/db-image.interface';
import { GetPageImagesService as getPageImages } from '@services/get-page-images.service';
import { AppPaginatorService } from '@app-paginator/app-paginator.abstract.service';


export abstract class ImagesListComponent {

	get images(): DBImage[] {
		return getPageImages.go(this.__paginator);
	}


	constructor(private __paginator: AppPaginatorService) {}

}

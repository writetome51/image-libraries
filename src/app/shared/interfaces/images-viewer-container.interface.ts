import { AppPaginatorService } from '@app-paginator/app-paginator.abstract.service';
import { JumpToPageInputService }
	from '@app-pagination-controls_module/jump-to-page-input.abstract.service';


export interface ImagesViewerContainer {

	imageTotal: number;

	routeBeforePageNumber: string;

	paginator: AppPaginatorService;

	jumpToPageInput: JumpToPageInputService;

}

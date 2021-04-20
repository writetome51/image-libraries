import { AppPaginatorService } from '@app-paginator/app-paginator.abstract.service';
import { Gettable } from '@interfaces/gettable.interface';
import { JumpToPageInputService }
	from '@app-pagination-controls_module/jump-to-page-input.abstract.service';


export abstract class ImagesViewerContainerComponent {

	abstract routeBeforePageNumber: string;


	get imageTotal(): number {
		return this.__storedImageTotal.get();
	}


	constructor(
		private __storedImageTotal: Gettable<number>,
		public paginator: AppPaginatorService,
		public jumpToPageInput: JumpToPageInputService
	) {}

}

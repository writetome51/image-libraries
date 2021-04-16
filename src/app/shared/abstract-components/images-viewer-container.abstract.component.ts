import { AppPaginatorService } from '@app-paginator/app-paginator.abstract.service';
import { JumpToPageInputService }
	from '@app-pagination-controls_module/jump-to-page-input.abstract.service';
import { Gettable } from '@interfaces/gettable.interface';


export abstract class ImagesViewerContainerComponent {

	get imageTotal(): number {
		return this.__storedImageTotal.get();
	}


	constructor(
		private __storedImageTotal: Gettable<number>,
		public paginator: AppPaginatorService,
		public jumpToPageInput: JumpToPageInputService
	) {}

}

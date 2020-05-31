import { Injectable } from '@angular/core';
import { PaginatorDataSourceService } from './paginator-data-source.service';
import { SetInitialDataTotalForLibraryService }
	from './set-initial-data-total-for-library.service';
import { GetLibraryProcessorService }
	from '../../data-transport-processor/image-fetching-processor/get-library-processor.service';
import { DBImage } from '../../../../interfaces/db-image';
import { LoadedImagesData as loadedImages }
	from '../../../../data-structures/runtime-state-data/static-classes/loaded-images.data';
import { LoadedLibraryData as loadedLibrary }
	from '../../../../data-structures/runtime-state-data/static-classes/loaded-library.data';


@Injectable({providedIn: 'root'})

export class LibraryPaginatorDataSourceService extends PaginatorDataSourceService {

	constructor(
		_getLibraryProcessor: GetLibraryProcessorService,
		__setInitial_dataTotal_forLibrary: SetInitialDataTotalForLibraryService
	) {
		super(_getLibraryProcessor, __setInitial_dataTotal_forLibrary);
	}


	protected _getSomethingFrom_loadedImages(): DBImage[] {
		return loadedLibrary.data._image_ids.map((id) => loadedImages.data[id]);
	}

}

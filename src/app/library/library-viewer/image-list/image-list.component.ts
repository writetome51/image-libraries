import { Component } from '@angular/core';
import { AppImage } from '../../../interfaces/app-image';
import { LibraryChangesService as libraryChanges }
	from '../../../services/library/library-changes.service';
import { CurrentLibraryData as library } from '../../../data/current-library.data';


@Component({
	selector: 'image-list',
	templateUrl: './image-list.component.html',
	styleUrls: ['./image-list.component.css']
})
export class ImageListComponent {

	get images(): AppImage[] {
		if (libraryChanges.exist && libraryChanges.data['images']) {
			return libraryChanges.data['images'];
		}
		else return library.data.images;
	}

}

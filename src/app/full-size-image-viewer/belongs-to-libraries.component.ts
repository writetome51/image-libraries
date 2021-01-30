import { Component, Input } from '@angular/core';
import { LibrariesInBrowserStorageService }
	from 'encrypted-item-in-browser-storage/libraries-in-browser-storage.service';
import { DBLibrary } from '@interfaces/db-library.interface';
import { DBImage } from '@interfaces/app-image/db-image.interface';
import { getByTest } from '@writetome51/array-get-by-test';


@Component({
	selector: 'belongs-to-libraries',
	template: `
		<p>Belongs to Libraries:</p>
		<ul>
			<li *ngFor="let library of libraries">
				<a [routerLink]="['/library', library.name, 'page', 1]">
					{{library.name}}
				</a>
			</li>
		</ul>
	`
})
export class BelongsToLibrariesComponent {

	@Input() image: DBImage;

	libraries: DBLibrary[] = [];


	constructor(private __librariesInBrowser: LibrariesInBrowserStorageService) {

		let libsMap: object = this.__librariesInBrowser.get();

		this.libraries = getByTest(
			(lib: DBLibrary) => lib._image_ids.includes(this.image._id),
			Object.values(libsMap)
		);

	}

}

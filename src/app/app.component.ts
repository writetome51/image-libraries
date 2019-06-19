import { Component, HostListener } from '@angular/core';
import { ImageStoreService } from './services/image-store.service';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	title = 'Image Library';
	showLibraryChooser = false;


	constructor(private __imageStore: ImageStoreService) {
	}


	get images(): any[] {
		return this.__imageStore.images;
	}


	// Adds keyup listener to document.
	@HostListener('document:keyup', ['$event'])
	onKeyup(event) {
		console.log(event);
	}


	logEvent(event) {
		console.log(event);
	}
}

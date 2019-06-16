import { Component, HostListener } from '@angular/core';
import { ImageStoreService } from './services/image-store.service';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	title = 'Image Library';
	introduction = `This application lets you create a library of images.  Inside it you can rename them, 
	rearrange their order, add descriptions to each, and do searches.`;

	createNewLibrary = false;
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

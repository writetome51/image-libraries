import { Component } from '@angular/core';
import { environment } from '@environments/environment';


@Component({
	selector: 'page-not-found',
	template: `
		<h2>Oops. Page not found.</h2>
		<img [src]="frownyFace.src" [alt]="frownyFace.alt" [width]="frownyFace.width"/>
	`
})
export class PageNotFoundComponent {

	frownyFace = {
		src: environment.assets + 'frowny-face-200.png',
		alt: 'sad face',
		width: 200,
		height: 200
	};
}

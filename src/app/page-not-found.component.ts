import { Component } from '@angular/core';
import { environment } from '@environments/environment';
import { HTMLImage } from '@interfaces/html-image.interface';


@Component({
	selector: 'page-not-found',
	template: `
		<h2>Not Found</h2>
		<html-image [data]="image"></html-image>
	`
})
export class PageNotFoundComponent {

	readonly image: HTMLImage = {
		src: environment.assets + 'bigfoot.png',
		alt: 'bigfoot',
		width: 400
	};
}

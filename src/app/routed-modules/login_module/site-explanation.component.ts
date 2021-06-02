import { Component } from '@angular/core';


@Component({
	selector: 'site-explanation',
	template: `
		<hoverable-container #container>

			<p id="site-explanation" aria-label="site-explanation">
				<span *ngIf="!(container.isHovered())" style="color:rgb(51, 122, 183);">
					Explain Site
				</span>
				<span *ngIf="container.isHovered()">{{explanation}}</span>
			</p>

		</hoverable-container>
	`
})
export class SiteExplanationComponent {

	explanation = `This application lets you save images to your account
	(either uploaded from your own device or found elsewhere on the web), then organize them in
	libraries.  Inside each library you can rearrange the image order, add
	descriptions, tags, and do searches.`;

}

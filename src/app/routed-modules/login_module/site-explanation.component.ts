import { Component } from '@angular/core';


@Component({
	selector: 'site-explanation',
	template: `
		<hoverable-container #container>

			<div id="site-explanation" aria-label="site-explanation">
				<p *ngIf="!(container.isHovered())" style="color:rgb(51, 122, 183);">
					Explain Site
				</p>

				<p *ngIf="container.isHovered()">
					<span class="justify-text">{{explanation}}</span>
					<br/>
					<span>
						<a target="_blank" href="https://www.youtube.com/watch?v=-D0Skj1bA90">
							Demo Video
						</a>
					</span>
				</p>
			</div>

		</hoverable-container>
	`,
	styles: [
		`p {margin:auto; max-width: 500px;}`,
		`div p span.justify-text {text-align: justify;}`
	]
})
export class SiteExplanationComponent {

	explanation = `This application lets you save images to your account
	(either uploaded from your own device or found elsewhere on the web), then organize them in
	libraries.  Inside each library you can rearrange the image order.`;

}

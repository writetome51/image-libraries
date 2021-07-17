import { Component } from '@angular/core';
import { environment } from '@environments/environment';


@Component({
	selector: 'tiny-loading-spinner',
	template: `
		<div>
			<div class="tiny-loading-spinner-container"
				 [style.position]="'relative'" [style.margin]="'auto'"
				 [style.width]="image.width + 'px'"
				 [style.height]="image.height + 'px'"
				 [style.background-image]="'url(' + image.src + ')'"
				 [style.background-repeat]="'no-repeat'"
			></div>
		</div>
	`,
	styles: [`div {margin: auto;}`]
})
export class TinyLoadingSpinnerComponent {

	image = {
		src: environment.assets + 'tiny-loading-spinner.gif',
		width: 24,
		height: 24,
	};

}

import { Component } from '@angular/core';
import { environment } from '@environments/environment';


@Component({
	selector: 'big-loading-spinner',
	template: `
		<div>
			<div class="big-loading-spinner-container"
				 [style.position]="'relative'" [style.margin]="'auto'"
				 [style.width]="image.width + 'px'"
				 [style.height]="image.height + 'px'"
				 [style.background-image]="'url(' + image.src + ')'"
				 [style.background-repeat]="'no-repeat'"
			></div>
		</div>
	`,
	styles: [`.big-loading-spinner-container {margin: auto;}`]
})
export class BigLoadingSpinnerComponent {

	image = {
		src: environment.assets + 'big-loading-spinner.gif',
		width: 200,
		height: 200,
	};

}

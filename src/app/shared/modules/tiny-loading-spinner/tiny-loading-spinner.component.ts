import { Component } from '@angular/core';
import { environment } from '@environments/environment';


@Component({
	selector: 'tiny-loading-spinner',
	template: `
		<div class="loading-spinner-container">
			<img [src]="littleSpinner.src" [width]="littleSpinner.width" [height]="littleSpinner.height"
				 alt="Waiting for response"
			/>
		</div>
	`,
	styleUrls: [`./tiny-loading-spinner.component.css`]
})
export class TinyLoadingSpinnerComponent {

	littleSpinner = {
		src: environment.assets + 'gear-24px.gif',
		width: 24,
		height: 24,
	};

}

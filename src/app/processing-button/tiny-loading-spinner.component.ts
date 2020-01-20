import { Component } from '@angular/core';


@Component({
	selector: 'tiny-loading-spinner',
	template: `
		<div class="loading-spinner-container">
			<img [src]="littleSpinner.src" [width]="littleSpinner.width" alt="Waiting for response"/>
		</div>
	`,
	styles: [`div { position: relative; }`]
})
export class TinyLoadingSpinnerComponent {

	littleSpinner = {
		src: '../../assets/loading-gear-50px.gif',
		width: 24,
		height: 24,
	};

}

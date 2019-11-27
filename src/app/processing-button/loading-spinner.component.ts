import { Component } from '@angular/core';


@Component({
	selector: 'app-loading-spinner',
	template: `
		<div>
			<img [src]="littleSpinner.src" [width]="littleSpinner.width" alt="Waiting for response"/>
		</div>
	`,
	styles: [`div { position: relative; }`]
})

// Instead of showing loading spinner below button after clicking,
// have button (once clicked) disappear and be replaced by spinner.

export class LoadingSpinnerComponent {


	littleSpinner = {
		src: '../../assets/loading-spinner-50.gif',
		width: 35,
		height: 35,
	};


}

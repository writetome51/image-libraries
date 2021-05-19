import { Component } from '@angular/core';


@Component({
	selector: 'app-fixed-overlay',
	template: `<div class="modal-overlay"><ng-content></ng-content></div>`,
	styles: [
		`.modal-overlay {
			position: absolute;
			z-index: 1000;
			padding: 100px;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			overflow: auto;
			background-color: rgb(0, 0, 0);
			background-color: rgba(0, 0, 0, 0.4);
		}`
	]
})
export class AppFixedOverlayComponent {}

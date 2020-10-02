import { Component } from '@angular/core';
import { environment } from '@environments/environment';


@Component({
	selector: 'submenu-pointer',
	template: `
		<img [src]="triangle.src" [width]="triangle.width" [height]="triangle.height"
			 [alt]="triangle.alt"
		/>
	`
})
export class SubmenuPointerComponent {

	triangle = {
		src: environment.assets + 'right-pointing-triangle.png',
		width: 7,
		height: 8,
		alt: 'sub-menu'
	};

}

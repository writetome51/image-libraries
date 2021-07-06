import { Component, Input } from '@angular/core';


@Component({
	selector: 'library-links',
	template: `
		<div>
			<ul>
				<li *ngFor="let label of labels">
					<a [routerLink]="['/library', label, 'page', 1]">{{ label }}</a>
				</li>
			</ul>
		</div>
	`
})
export class LibraryLinksComponent {

	@Input() labels: string[];

}

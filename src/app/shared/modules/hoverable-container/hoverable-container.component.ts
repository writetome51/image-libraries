import { Component } from '@angular/core';
import { Hoverable } from '@interfaces/hoverable';


@Component({
	selector: 'hoverable-container',
	template: `
		<div class="hoverable-container" (mouseover)="hover()" (mouseleave)="unHover()"
			[class.hovered]="isHovered()"
		>
			<ng-content></ng-content>
		</div>
	`,
	styleUrls: ['./hoverable-container.component.css']
})
export class HoverableContainerComponent implements Hoverable {

	private __hovered = false;


	hover(): void {
		this.__hovered = true;
	}


	unHover(): void {
		this.__hovered = false;
	}


	isHovered(): boolean {
		return this.__hovered;
	}

}

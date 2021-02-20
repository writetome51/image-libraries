import { Component, EventEmitter, Output } from '@angular/core';
import { Hoverable } from '@interfaces/hoverable.interface';


/*********
To use this component's events (hover) and (unhover), example:

<hoverable-container #reference  (hover)="doStuff()"  (unhover)="doOtherStuff()">
	<nested-component [class.hovered]="reference.isHovered()"></nested-component>
</hoverable-container>
 *********/

@Component({
	selector: 'hoverable-container',
	template: `
		<div class="hoverable-container" [class.hovered]="isHovered()"
			 (mouseenter)="set_hovered()" (mouseleave)="unset_hovered()"
		>
			<ng-content></ng-content>
		</div>
	`
})
export class HoverableContainerComponent implements Hoverable {

	@Output() hover = new EventEmitter();
	@Output() unhover = new EventEmitter();

	private __hovered = false;


	set_hovered(): void {
		this.__hovered = true;
		this.hover.emit();
	}


	unset_hovered(): void {
		this.__hovered = false;
		this.unhover.emit();
	}


	isHovered(): boolean {
		return this.__hovered;
	}

}

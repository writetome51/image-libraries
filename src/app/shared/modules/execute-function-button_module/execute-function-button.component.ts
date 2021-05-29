import { ClickExecuteFunctionDirective }
	from '@app/shared/abstract-directives/click-execute-function.abstract.directive';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, ViewChild }
	from '@angular/core';


@Component({
	selector: 'execute-function-button',
	template: `
		<div class="processing-button-container">

			<button #button class="btn btn-default" [type]="type" (click)="execute($event)"
		  		[style]="width"
			>
				<ng-content *ngIf="!(clicked)"></ng-content>

				<tiny-loading-spinner *ngIf="clicked && executionStatus.waiting">
				</tiny-loading-spinner>

			</button>

		</div>
	`,
	styleUrls: ['./execute-function-button.component.css']
})
export class ExecuteFunctionButtonComponent extends ClickExecuteFunctionDirective
	implements AfterViewInit {

	// If 'submit', it's automatically clicked when pressing RETURN in a form
	@Input() type: 'button' | 'submit' = 'button';

	@ViewChild('button') button: ElementRef;


	get width(): string {
		return this.__getFixedWidthThatDoesntChangeWhenClicked();
	}


	constructor(private ref: ChangeDetectorRef) {
		super();
	}


	ngAfterViewInit() {
		// Ensures 'ExpressionChangedAfterItHasBeenCheckedError' doesn't appear in console.
		this.ref.detectChanges();
	}


	private __getFixedWidthThatDoesntChangeWhenClicked() {
		if (!(this.button)) return 'width: max-content;';
		else return 'width: ' + this.button.nativeElement.offsetWidth + 'px;';
	}

}

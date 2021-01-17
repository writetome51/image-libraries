import { ClickExecuteFunctionComponent }
	from '@abstract-components/click-execute-function.component';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, ViewChild }
	from '@angular/core';


@Component({
	selector: 'execute-function-button',
	templateUrl: './execute-function-button.component.html',
	styleUrls: ['./execute-function-button.component.css']
})
export class ExecuteFunctionButtonComponent extends ClickExecuteFunctionComponent
	implements AfterViewInit {

	// If 'submit', it's automatically clicked when pressing RETURN in a form
	@Input() type: 'button' | 'submit' = 'button';

	@ViewChild('button') button: ElementRef;


	get width() {
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

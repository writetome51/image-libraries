import { Component, Input } from '@angular/core';

// This component, instead of creating a <custom-element>, creates an attribute, as in
// <element  attribute></element>.  But it also contains its own html template.  Which can seem
// confusing:  why would an attribute have its own html template?  This could make for very
// confusing html.  Don't use this type of component unless there's no way to do the same thing
// with an <element> component.

@Component({
	selector: '[frame]',
	template: `
		<div class="sticky">
			<div class="title">
				{{title}}
			</div>
			<div class="content">
				<ng-content></ng-content>
			</div>
			<div class="description">
				{{description}}
			</div>
		</div>
	`,
	styleUrls: ['./frame.component.css']
})
export class FrameComponent {

	// tslint:disable-next-line:no-input-rename
	@Input('frame.title') title = '';
	// tslint:disable-next-line:no-input-rename
	@Input('frame.description') description = '';

}

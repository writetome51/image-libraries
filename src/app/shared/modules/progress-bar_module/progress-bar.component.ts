import { AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild } from '@angular/core';
import { Progress } from '@interfaces/progress.interface';


@Component({
	selector: 'progress-bar',
	template: `
		<div #bar class="fixed-overlay progress-bar">{{label}}
			<span #percentage>0 %</span>
		</div>
	`,
	styles: [
		`.progress-bar {
			width: 1px;
			height: 25px;
			padding-left: 10px;
			background-color: #0e6d4a;
			text-align: left; color: white; line-height: 25px;
		}`
	]
})
export class ProgressBarComponent implements OnDestroy, AfterViewInit {

	@Input() progress: Progress;
	@Input() label? = '';
	@ViewChild('bar') private __bar: ElementRef;
	@ViewChild('percentage') private __percentage: ElementRef;
	private __interval;


	ngAfterViewInit() {
		this.__interval = setInterval(
			() => {
								// There can't be a space before the '%' (CSS syntax rule)
				this.__bar.nativeElement.style.width = this.progress.percentageComplete + '%';

				this.__percentage.nativeElement.innerHTML = this.progress.percentageComplete + ' %';
			},
			200
		);
	}


	ngOnDestroy() {
		clearInterval(this.__interval);
		this.progress.percentageComplete = 0;
	}

}

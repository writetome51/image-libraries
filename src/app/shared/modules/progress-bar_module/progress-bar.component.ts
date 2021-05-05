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
			height: 30px;
			padding-left: 10px;
			background-color: #0d6444;
			text-align: left; color: white; line-height: 30px;
		}`
	]
})
export class ProgressBarComponent implements OnDestroy, AfterViewInit {

	@ViewChild('bar') bar: ElementRef;
	@ViewChild('percentage') percentage: ElementRef;
	@Input() progress: Progress;
	@Input() label? = '';
	private __interval;


	ngAfterViewInit() {
		this.__interval = setInterval(
			() => {
								// There can't be a space before the '%' (CSS syntax rule)
				this.bar.nativeElement.style.width = this.progress.percentageComplete + '%';

				this.percentage.nativeElement.innerHTML = this.progress.percentageComplete + ' %';
			},
			200
		);
	}


	ngOnDestroy() {
		clearInterval(this.__interval);
		this.progress.percentageComplete = 0;
	}

}

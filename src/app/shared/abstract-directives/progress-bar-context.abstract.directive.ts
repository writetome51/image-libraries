import { Progress } from '@interfaces/progress.interface';


export abstract class ProgressBarContextDirective {

	abstract progress: Progress;
	abstract label: string;


	get percentageComplete() {
		return this.progress.percentageComplete;
	}

}

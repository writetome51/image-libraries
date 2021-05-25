import { Progress } from '@interfaces/progress.interface';


export abstract class ProgressBarContextComponent {

	abstract progress: Progress;
	abstract label: string;


	get percentageComplete() {
		return this.progress.percentageComplete;
	}

}

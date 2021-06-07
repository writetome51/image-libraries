import { Progress } from '@interfaces/progress.interface';
import { HasLabel } from '@interfaces/has-label.interface';


export interface ProgressBarData extends HasLabel {

	progress: Progress;

}

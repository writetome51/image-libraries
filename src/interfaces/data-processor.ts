import { Processor } from './processor';


export interface DataProcessor extends Processor {
	process: () => void;
}

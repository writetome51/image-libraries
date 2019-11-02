import { Processor } from './processor';


export interface ResultProcessor extends Processor {
	process: (result) => void;
}

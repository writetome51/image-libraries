import { Processor } from './processor';


export interface DataOperationProcessor extends Processor {
	process: () => void;
}

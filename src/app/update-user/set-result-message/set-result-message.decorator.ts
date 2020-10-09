import { __SetResultMessageDecorator } from './__set-result-message.decorator';


export const SetResultMessage: (message: string) => Function = __SetResultMessageDecorator;

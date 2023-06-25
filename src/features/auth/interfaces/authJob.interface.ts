import { IAuthDocument } from './authDocument.interface';
import { IUserDocument } from '@root/features/user/interfaces/userDocument.interface';

export interface IAuthJob {
	value?: string | IAuthDocument | IUserDocument;
}

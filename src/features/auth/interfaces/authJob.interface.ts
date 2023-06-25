import { IAuthDocument } from './authDocument.interface';
import { IArtistDocument } from '@user/interfaces/artistDocument.interface';

export interface IAuthJob {
  value?: string | IAuthDocument | IArtistDocument;
}

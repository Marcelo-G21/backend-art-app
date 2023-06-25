import { IArtistDocument } from './artistDocument.interface';

export interface IAllArtists {
  users: IArtistDocument[];
  totalUsers: number;
}

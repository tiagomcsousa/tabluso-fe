import { Artist } from './artist.model';
import { Song } from './song.model';

export interface TabInfo {
  id: number;
  artist: Artist;
  song: Song;
}

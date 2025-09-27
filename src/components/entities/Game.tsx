import type { Genre } from './Genre';
import type { Platform } from './Platform';
import type { Publisher } from './Publisher';

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  genres: Genre[];
  publishers: Publisher[];
  metacritic: number;
  slug: string;
  description_raw: string;
}

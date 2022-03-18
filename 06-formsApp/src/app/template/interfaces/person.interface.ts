export interface Person {
  name: string;
  favorites: Favorite[];
}

export interface Favorite {
  id: number;
  name: string;
}

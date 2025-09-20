export interface ArtPiece {
  id: string;
  imageUrl: string;
  title: string;
  artistName: string;
  artistAvatar: string;
  description: string;
  longDescription: string;
  category: string;
  price: number;
  likes: number;
  saves: number;
  rowSpan?: number;
}

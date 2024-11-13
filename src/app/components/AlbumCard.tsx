// src/components/AlbumCard.tsx
import { Album, Artist } from "../types";

interface AlbumCardProps {
  album: Album;
  artist: Artist;
}

const AlbumCard: React.FC<AlbumCardProps> = ({ album, artist }) => (
  <div className="p-4 bg-white rounded shadow">
    <img src={album.coverImage} alt={album.title} className="w-full h-40 object-cover" />
    <h2 className="text-xl font-semibold">{album.title}</h2>
    <p>{artist.name}</p>
    <p>{album.releaseYear}</p>
  </div>
);

export default AlbumCard;

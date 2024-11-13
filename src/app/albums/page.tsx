// src/pages/albums/index.tsx
import { useState, useEffect } from "react";
import AlbumCard from "../components/AlbumCard";
import { Album, Artist } from "../types";

const AlbumsPage = () => {
  // Dados fictícios para teste
  const [albums, setAlbums] = useState<Album[]>([]);
  const [artists, setArtists] = useState<Artist[]>([]);

  useEffect(() => {
    // Exemplo de dados fictícios para artistas
    const mockArtists: Artist[] = [
      { id: "1", name: "Artista 1", genre: "Rock", albums: [] },
      { id: "2", name: "Artista 2", genre: "Pop", albums: [] },
      // Adicione mais artistas conforme necessário
    ];
    setArtists(mockArtists);

    // Exemplo de dados fictícios para álbuns
    const mockAlbums: Album[] = [
      {
        id: "1",
        title: "Album One",
        releaseYear: 2001,
        coverImage: "/images/album1.jpg",
        tracks: [{ title: "Track 1", duration: "3:45" }],
        genres: ["Rock"],
        artistId: "1", // Associando ao Artista 1
      },
      {
        id: "2",
        title: "Album Two",
        releaseYear: 2005,
        coverImage: "/images/album2.jpg",
        tracks: [{ title: "Track 2", duration: "4:20" }],
        genres: ["Pop"],
        artistId: "2", // Associando ao Artista 2
      },
      // Adicione mais álbuns conforme necessário
    ];
    setAlbums(mockAlbums);
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Álbuns</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {albums.map((album) => {
          const artist = artists.find((artist) => artist.id === album.artistId); // Encontrar artista correspondente
          return (
            <AlbumCard key={album.id} album={album} artist={artist || { id: "", name: "Desconhecido", genre: "", albums: [] }} />
          );
        })}
      </div>
    </div>
  );
};

export default AlbumsPage;

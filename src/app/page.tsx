"use client"
// src/pages/index.tsx
import { useState, useEffect } from "react";
import AlbumCard from "./components/AlbumCard";
import { Album, Artist } from "./types";

const HomePage = () => {
  const [albums, setAlbums] = useState<Album[]>([]); // Dados fictícios ou a partir de uma API
  const [searchQuery, setSearchQuery] = useState("");

  // Função para carregar os álbuns (simulação de dados)
  useEffect(() => {
    // Exemplo de dados fictícios
    const mockAlbums: Album[] = [
      {
        id: "1",
        title: "Kyan",
        releaseYear: 2001,
        coverImage: "/images/album1.jpg",
        tracks: [{ title: "Track 1", duration: "3:45" }],
        genres: ["Rock"],
        artistId: "1",
      },
      {
        id: "2",
        title: "Unorthodox Jukebox",
        releaseYear: 2012,
        coverImage: "/images/bruno_mars.jpg",
        tracks: [
          { title: "Locked Out of Heaven", duration: "3:53" },
          { title: "Treasure", duration: "3:12" }
        ],
        genres: ["Pop", "R&B"],
        artistId: "2",
      },
      {
        id: "3",
        title: "KayBlack",
        releaseYear: 2020,
        coverImage: "/images/kayblack.jpg",
        tracks: [
          { title: "Vida Cara", duration: "4:10" },
          { title: "Sem Tempo", duration: "3:05" }
        ],
        genres: ["Trap", "Hip-Hop"],
        artistId: "3",
      },
      {
        id: "4",
        title: "Era Uma Vez",
        releaseYear: 2023,
        coverImage: "/images/mc_tuto.jpg",
        tracks: [
          { title: "Era Uma Vez", duration: "4:20" },
          { title: "Muita Grana", duration: "3:50" }
        ],
        genres: ["Funk"],
        artistId: "4",
      },
      {
        id: "5",
        title: "Manifesto Musical",
        releaseYear: 2022,
        coverImage: "/images/henrique_juliano.jpg",
        tracks: [
          { title: "Arranhão", duration: "3:30" },
          { title: "Evento Cancelado", duration: "4:05" }
        ],
        genres: ["Sertanejo"],
        artistId: "5",
      },
    ];
    setAlbums(mockAlbums);
  }, []);

  // Função de filtragem de álbuns
  const filteredAlbums = albums.filter(
    (album) =>
      album.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      album.genres.some((genre) =>
        genre.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  return (
    <div className="p-8 bg-black text-white min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Catálogo de Discos</h1>

      {/* Barra de Pesquisa */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Buscar por título ou gênero..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 border border-gray-700 bg-gray-800 text-white rounded w-full"
        />
      </div>

      {/* Lista de Discos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-black">
        {filteredAlbums.length > 0 ? (
          filteredAlbums.map((album) => (
            <AlbumCard
              key={album.id}
              album={album}
              artist={{
                id: album.artistId,
                name: getArtistName(album.artistId),
                genre: album.genres[0],
                albums: [],
              }} // Busca do nome real do artista
            />
          ))
        ) : (
          <p className="text-center text-gray-400">Nenhum disco encontrado.</p>
        )}
      </div>
    </div>
  );
};

// Função para buscar o nome do artista
const getArtistName = (artistId: string) => {
  const artists: { [key: string]: string } = {
    "1": "Kyan",
    "2": "Bruno Mars",
    "3": "Kayblack",
    "4": "MC Tuto",
    "5": "Henrique & Juliano",
  };
  return artists[artistId] || "Desconhecido";
};

export default HomePage;

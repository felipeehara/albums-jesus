"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Hook para redirecionamento
import { Album } from "../types";

const HomePage = () => {
  const router = useRouter(); // Instanciando o hook useRouter
  const [albums, setAlbums] = useState<Album[]>([]); // Dados fictícios ou a partir de uma API
  const [newAlbum, setNewAlbum] = useState({
    title: "",
    releaseYear: "",
    coverImage: "",
    artistId: "",
    genres: "",
  });

  // Função para carregar os álbuns (simulação de dados)
  useEffect(() => {
    // Exemplo de dados fictícios
    const mockAlbums: Album[] = [
      // Dados de álbuns já existentes
      {
        id: "1",
        title: "Kyan",
        releaseYear: 2001,
        coverImage: "/images/album1.jpg",
        tracks: [{ title: "Track 1", duration: "3:45" }],
        genres: ["Rock"],
        artistId: "1",
      },
      // Outros álbuns...
    ];
    setAlbums(mockAlbums);
  }, []);

  // Função para adicionar um novo álbum
  const addAlbum = () => {
    if (
      newAlbum.title &&
      newAlbum.releaseYear &&
      newAlbum.coverImage &&
      newAlbum.artistId &&
      newAlbum.genres
    ) {
      const newAlbumData: Album = {
        id: (albums.length + 1).toString(), // Gerar um ID único
        title: newAlbum.title,
        releaseYear: parseInt(newAlbum.releaseYear),
        coverImage: newAlbum.coverImage,
        tracks: [],
        genres: newAlbum.genres.split(",").map((genre) => genre.trim()), // Separar os gêneros
        artistId: newAlbum.artistId,
      };

      // Atualiza o estado dos álbuns com o novo álbum
      setAlbums((prevAlbums) => [...prevAlbums, newAlbumData]);

      // Redireciona para a página inicial após adicionar o álbum
      router.push("/");

      // Limpa o formulário
      setNewAlbum({ title: "", releaseYear: "", coverImage: "", artistId: "", genres: "" });
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  };

  // Função para cancelar a criação do álbum
  const cancelAlbumCreation = () => {
    // Limpa o formulário
    setNewAlbum({ title: "", releaseYear: "", coverImage: "", artistId: "", genres: "" });

    // Redireciona para a página inicial
    router.push("/");
  };

  return (
    <div className="p-8 bg-black text-white min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Adicionar um novo Álbum</h1>
      
      {/* Formulário para adicionar um novo álbum */}
      <div className="mt-8 p-4 bg-gray-800 rounded">
        <h2 className="text-xl font-bold mb-4">Adicionar Novo Álbum</h2>
        <input
          type="text"
          placeholder="Título do álbum"
          value={newAlbum.title}
          onChange={(e) => setNewAlbum({ ...newAlbum, title: e.target.value })}
          className="p-2 mb-2 border border-gray-700 bg-gray-700 text-white rounded w-full"
        />
        <input
          type="text"
          placeholder="Ano de lançamento"
          value={newAlbum.releaseYear}
          onChange={(e) => setNewAlbum({ ...newAlbum, releaseYear: e.target.value })}
          className="p-2 mb-2 border border-gray-700 bg-gray-700 text-white rounded w-full"
        />
        <input
          type="text"
          placeholder="URL da imagem de capa"
          value={newAlbum.coverImage}
          onChange={(e) => setNewAlbum({ ...newAlbum, coverImage: e.target.value })}
          className="p-2 mb-2 border border-gray-700 bg-gray-700 text-white rounded w-full"
        />
        <input
          type="text"
          placeholder="ID do artista"
          value={newAlbum.artistId}
          onChange={(e) => setNewAlbum({ ...newAlbum, artistId: e.target.value })}
          className="p-2 mb-2 border border-gray-700 bg-gray-700 text-white rounded w-full"
        />
        <input
          type="text"
          placeholder="Gêneros (separados por vírgula)"
          value={newAlbum.genres}
          onChange={(e) => setNewAlbum({ ...newAlbum, genres: e.target.value })}
          className="p-2 mb-2 border border-gray-700 bg-gray-700 text-white rounded w-full"
        />
        <div className="flex space-x-4 mt-4">
          <button
            onClick={addAlbum}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded"
          >
            Adicionar Álbum
          </button>
          <button
            onClick={cancelAlbumCreation}
            className="w-full bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 rounded"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

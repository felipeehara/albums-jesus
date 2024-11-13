"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";

const AddAlbum = () => {
  const [title, setTitle] = useState("");
  const [genres, setGenres] = useState("");
  const [imageUrl, setImageUrl] = useState(""); // Novo estado para a URL da imagem
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Obter álbuns existentes do localStorage
    const storedAlbums = localStorage.getItem("albums");
    const albums = storedAlbums ? JSON.parse(storedAlbums) : [];

    // Adicionar novo álbum à lista
    const newAlbum = {
      id: Date.now().toString(), // Usando a data atual como id único
      title,
      genres: genres.split(",").map((genre) => genre.trim()),
      image: imageUrl || "https://via.placeholder.com/150", // Se não for fornecido, usa um placeholder
    };

    albums.push(newAlbum);

    // Salvar a lista de álbuns no localStorage
    localStorage.setItem("albums", JSON.stringify(albums));

    // Redirecionar para a página inicial
    router.push("/");
  };

  return (
    <div className="p-8 bg-black text-white min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Adicionar Álbum</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Título do Álbum"
            className="p-2 border border-gray-700 bg-gray-800 text-white rounded w-full"
            required
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            value={genres}
            onChange={(e) => setGenres(e.target.value)}
            placeholder="Gêneros (separados por vírgula)"
            className="p-2 border border-gray-700 bg-gray-800 text-white rounded w-full"
            required
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="URL da imagem do álbum (opcional)"
            className="p-2 border border-gray-700 bg-gray-800 text-white rounded w-full"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700"
        >
          Adicionar Álbum
        </button>
      </form>
    </div>
  );
};

export default AddAlbum;

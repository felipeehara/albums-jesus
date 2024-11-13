"use client"
// pages/add-album.tsx
import { useState } from "react";

const AddAlbum = () => {
  const [title, setTitle] = useState("");
  const [genres, setGenres] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar lógica para salvar o álbum
    alert(`Álbum adicionado: ${title}`);
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
            value={genres.join(", ")}
            onChange={(e) =>
              setGenres(e.target.value.split(",").map((genre) => genre.trim()))
            }
            placeholder="Gêneros (separados por vírgula)"
            className="p-2 border border-gray-700 bg-gray-800 text-white rounded w-full"
            required
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

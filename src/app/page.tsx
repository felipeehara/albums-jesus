"use client"
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const [albums, setAlbums] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  // Carregar álbuns do localStorage quando a página carregar
  useEffect(() => {
    const storedAlbums = localStorage.getItem("albums");
    if (storedAlbums) {
      setAlbums(JSON.parse(storedAlbums));
    } else {
      const defaultAlbums = [
        {
          id: "1",
          title: "Kay Black - Blackout",
          genres: ["Hip-Hop", "Rap"],
          image: "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2024/07/20/1481854595-kayblack-12-wmg.png"
        },
        {
          id: "2",
          title: "Bruno Mars - 24K Magic",
          genres: ["Pop", "R&B"],
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSlR9-3UmgGKxf4kcx1mW68-jRbGh6E9TB1Q&s"
        },
        {
          id: "3",
          title: "Adele - 21",
          genres: ["Pop", "Soul"],
          image: "https://cdns-images.dzcdn.net/images/cover/eaeadce7932a97533fe495881d2fcd7a/0x1900-000000-80-0-0.jpg"
        }
      ];
      localStorage.setItem("albums", JSON.stringify(defaultAlbums));
      setAlbums(defaultAlbums);
    }
  }, []);

  // Função para adicionar um novo álbum
  const handleAddAlbum = () => {
    router.push("/AddAlbumPage");
  };

  // Função para remover um álbum específico
  const handleRemoveAlbum = (albumId: string) => {
    const confirmed = window.confirm("Tem certeza de que deseja remover este álbum?");
    if (confirmed) {
      const updatedAlbums = albums.filter((album) => album.id !== albumId);
      setAlbums(updatedAlbums);
      localStorage.setItem("albums", JSON.stringify(updatedAlbums));
    }
  };

  // Função para remover todos os álbuns com confirmação
  const handleClearAlbums = () => {
    const confirmed = window.confirm("Tem certeza de que deseja remover todos os álbuns?");
    if (confirmed) {
      localStorage.removeItem("albums");
      setAlbums([]);
    }
  };

  // Função para limpar todo o localStorage com confirmação
  const handleClearAllStorage = () => {
    const confirmed = window.confirm("Tem certeza de que deseja limpar todo o armazenamento local?");
    if (confirmed) {
      localStorage.clear();
      setAlbums([]);
    }
  };

  // Função para filtrar os álbuns
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

      <input
        type="text"
        placeholder="Buscar por título ou gênero..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="p-2 border border-gray-700 bg-gray-800 text-white rounded w-full mb-6"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredAlbums.length > 0 ? (
          filteredAlbums.map((album) => (
            <div key={album.id} className="bg-gray-800 p-4 rounded-lg relative">
              <button
                onClick={() => handleRemoveAlbum(album.id)}
                className="absolute top-2 right-2 text-gray-500 hover:text-red-600 rounded-full p-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 7l-.867 12.142A2 2 0 0116.136 21H7.864a2 2 0 01-1.997-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3m-3 0h12"
                  />
                </svg>
              </button>
              <img src={album.image} alt={album.title} className="w-full h-40 object-cover rounded-lg mb-4" />
              <h2 className="text-xl font-semibold">{album.title}</h2>
              <p className="text-gray-400">{album.genres.join(", ")}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400">Nenhum disco encontrado.</p>
        )}
      </div>

      <button
        onClick={handleAddAlbum}
        className="mt-8 bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700"
      >
        Adicionar Álbum
      </button>

      <button
        onClick={handleClearAlbums}
        className="mt-4 bg-red-600 text-white py-2 px-4 rounded-full hover:bg-red-700"
      >
        Remover Todos os Álbuns
      </button>

    </div>
  );
};

export default HomePage;

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
      // Se não houver álbuns, adicione os álbuns padrão
      const defaultAlbums = [
        {
          id: "1",
          title: "Kay Black - Blackout",
          genres: ["Hip-Hop", "Rap"],
          image: "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2024/07/20/1481854595-kayblack-12-wmg.png" 
          // Exemplo de imagem
        },
        {
          id: "2",
          title: "Bruno Mars - 24K Magic",
          genres: ["Pop", "R&B"],
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSlR9-3UmgGKxf4kcx1mW68-jRbGh6E9TB1Q&s" // Exemplo de imagem
        },
        {
          id: "3",
          title: "Adele - 21",
          genres: ["Pop", "Soul"],
          image: "https://cdns-images.dzcdn.net/images/cover/eaeadce7932a97533fe495881d2fcd7a/0x1900-000000-80-0-0.jpg" // Exemplo de imagem
        }
      ];
      localStorage.setItem("albums", JSON.stringify(defaultAlbums));
      setAlbums(defaultAlbums);
    }
  }, []); // Dependência vazia para carregar apenas uma vez

  // Função para adicionar um novo álbum
  const handleAddAlbum = () => {
    router.push("/AddAlbumPage");
  };

  // Função para filtrar os álbuns
  const filteredAlbums = albums.filter(
    (album) =>
      album.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      album.genres.some((genre) =>
        genre.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  // Função para remover todos os álbuns
  const handleClearAlbums = () => {
    localStorage.removeItem("albums"); // Remove os álbuns do localStorage
    setAlbums([]); // Limpa a lista de álbuns da página
  };

  // Função para limpar todo o localStorage
  const handleClearAllStorage = () => {
    localStorage.clear(); // Limpa todo o conteúdo do localStorage
    setAlbums([]); // Limpa a lista de álbuns da página
  };

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
            <div key={album.id} className="bg-gray-800 p-4 rounded-lg">
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

      {/* Botão para remover álbuns */}
      <button
        onClick={handleClearAlbums}
        className="mt-8 bg-red-600 text-white py-2 px-4 rounded-full hover:bg-red-700"
      >
        Remover Álbuns
      </button>

    
    </div>
  );
};

export default HomePage;

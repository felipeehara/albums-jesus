// src/pages/albums/new.tsx
import AlbumForm from "../components/AlbumForm";
import { Album } from "../types";

const NewAlbumPage = () => {
  const addAlbum = (album: Album) => {
    // Salvar o álbum em uma base de dados ou API
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Add New Album</h1>
      <AlbumForm onSubmit={addAlbum} />
    </div>
  );
};

export default NewAlbumPage;

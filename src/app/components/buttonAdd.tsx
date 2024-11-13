import Link from "next/link";

export const ButtonAdd = () => {
  return (
    <div className="flex justify-center mt-6">
      <Link href="/albums">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
          ADICIONAR NOVO ÁLBUM
        </button>
      </Link>
    </div>
  );
};

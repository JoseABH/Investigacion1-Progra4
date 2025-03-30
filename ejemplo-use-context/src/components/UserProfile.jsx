import React from "react";
import { useUser } from "../hook/useUser";

export function UserProfile() {
  const { user, login, logout } = useUser();

  return (
    <div className="p-4">
      <h2 className="text-lg">Perfil de usuario</h2>
      {user ? (
        <div>
          <p>Bienvenido, {user.name}!</p>
          <button
            onClick={logout}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
          >
            Cerrar sesión
          </button>
        </div>
      ) : (
        <div>
          <button
            onClick={() => login("Usuario123")}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Iniciar sesión
          </button>
        </div>
      )}
    </div>
  );
}

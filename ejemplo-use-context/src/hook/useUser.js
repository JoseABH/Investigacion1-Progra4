import { useContext } from "react";
import UserContext from "../context/UserContext"; // Importar el contexto

// Hook personalizado para acceder al contexto de usuario
export function useUser() {
  return useContext(UserContext);
}

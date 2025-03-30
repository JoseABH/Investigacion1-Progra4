import React from "react";
import { useCatFact } from "../hook/useCatFact";

export function CatFact() {
  const { fact, loading, error, refreshFact } = useCatFact();

  if (loading) return <p>Cargando hecho...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <p>{fact}</p>
      <button
        onClick={refreshFact}
      >
        Obtener nuevo hecho
      </button>
    </div>
  );
}

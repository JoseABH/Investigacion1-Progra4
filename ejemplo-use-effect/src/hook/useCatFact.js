import { useState, useEffect } from "react";

export function useCatFact() {
  const [fact, setFact] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [trigger, setTrigger] = useState(false); // Para forzar la actualización

  useEffect(() => {
    const fetchCatFact = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://catfact.ninja/fact");
        if (!response.ok) throw new Error("No se pudo obtener el hecho.");
        const data = await response.json();
        setFact(data.fact);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCatFact();
  }, [trigger]); // Dependemos del trigger para volver a cargar el hecho

  const refreshFact = () => {
    setTrigger(prev => !prev); // Cambiar el valor de trigger para disparar el efecto

  };

  return { fact, loading, error, refreshFact };
}

import { useRef, useEffect } from "react";

export function useFocus() {
  const inputRef = useRef(null);

  useEffect(() => {
    // Al montar el componente, enfocar el input automáticamente
    inputRef.current.focus();
  }, []);

  return inputRef;
}

import React, { useState } from "react";
import { useFocus } from "../hook/useFocus";

export function FocusInput() {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useFocus();  // Usamos el hook para obtener la referencia del input

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFocusClick = () => {
    inputRef.current.focus(); // Al hacer clic en el botón, enfocamos el input
  };

  return (
    <div className="p-4">
      <h2 className="text-lg">Usando useRef para enfocar el input</h2>
      <input
        ref={inputRef} // Referencia al input con useRef
        type="text"
        value={inputValue}
        onChange={handleChange}
        className="mt-2 p-2 border border-gray-300 rounded"
      />
      <button
        onClick={handleFocusClick}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Enfocar input
      </button>
    </div>
  );
}

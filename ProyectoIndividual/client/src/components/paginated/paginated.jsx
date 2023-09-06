import { React, useState } from "react";

import "./paginated.css";

export default function Paginated({ totalPageCount, paginated }) {
  const [activeButton, setActiveButton] = useState(1);
  // utilizamos el hook useState para definir una variable de estado local llamada 'activebutton', inicializada en 1. Este estado se utilizara para rastrear el numero de pagina actualmente activo.

  const handleButtonClick = (number) => {
    if (number >= 1 && number <= totalPageCount) {
      paginated(number);
      setActiveButton(number);
    }
  }; // definimos una función llamada handleButtonClick que toma un número como argumento. Esta función se ejecutará cuando se haga clic en un botón de página. Dentro de esta función, se llama a la función paginated pasando el número como argumento y luego se actualiza el estado activeButton con ese número.
  const prevButton = (
    <span
      className={`page-item ${activeButton === 1 ? "disabled" : ""}`}
      onClick={() => handleButtonClick(activeButton - 1)}
    >
      <a href="#" className="page-a">
        {" "}
        Prev
      </a>
    </span>
  );
  const nextButton = (
    <span
      className={`page-item ${
        activeButton === totalPageCount ? "disabled" : ""
      }`}
      onClick={() => handleButtonClick(activeButton + 1)}
    >
      <a href="#" className="page-a">
        Next
      </a>
    </span>
  );

  const pageNumberButtons = Array.from({ length: totalPageCount }, (_, i) => (
    <span
      key={i + 1}
      className={`page-item ${i + 1 === activeButton ? "active" : ""}`}
      onClick={() => handleButtonClick(i + 1)}
    >
      <a href="#" className="page-a">
        {i + 1}
      </a>
    </span>
  ));
  return (
    <div className="pagination">
      {prevButton}
      {pageNumberButtons}
      {nextButton}
    </div>
  );
}
// Este componente Paginated proporciona una interfaz de paginación para navegar a través de nuestra lista de paises divididos en páginas. Permite al usuario avanzar y retroceder en la lista y seleccionar una página específica mediante la función 'paginated' pasada como prop.

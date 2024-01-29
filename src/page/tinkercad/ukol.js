import React, { useEffect } from 'react';

const TinkercadUkol = () => {
  useEffect(() => {
    document.title = 'TinkerCAD Ukol';
  }, []); 
  return (
    <main role="main" className="container">
      <div className='content'>
        <h1>TinkerCAD - Odevzdání úkolu</h1>
        <h3 >Jak odevzad domácí úkol</h3>
        <table>
          <tr>
            <td>
              <p>Otevřeme si náš úkol na stránkách tinkerCADu. Tam zkopírujeme URL adresu. Ta, která je označena na obrázku
                vedle.</p>
            </td>
          </tr>
          <tr>

          </tr>
          <tr>
            <td>
              <p>Poté si otevřeme word nebo poznámkový blok. Tam vložíme náš odkaz.</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                Jako poslední si vytvoříme pomocí pravého tlačítka na ploše komprimentovanou složku. Do ní vložíme námi
                vytvořený word nebo poznámkový blok.

              </p>
            </td>
          </tr>
        </table>
      </div>
    </main>
  );
}

export default TinkercadUkol;

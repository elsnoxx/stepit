import React, { useState } from 'react';

const DownloadButton = ({ fileUrl, buttonText, requiresPassword }) => {
  const [password, setPassword] = useState('');

  const handleDownload = () => {
    if (requiresPassword) {
      // Tady ověř heslo, pokud je vyžadováno
      const correctPassword = 'tajneHeslo';
      if (password !== correctPassword) {
        alert('Heslo není správné nebo nebylo zadáno.');
        return;
      }
    }

    // Vytvoření odkazu a kliknutí na něj pro stažení
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = '';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      {requiresPassword && (
        <input
          type="password"
          placeholder="Zadej heslo"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      )}
      <button onClick={handleDownload}>
        {buttonText || 'Stažení'}
      </button>
    </div>
  );
};

export default DownloadButton;

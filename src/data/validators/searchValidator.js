export const isSearchValid = (searchValue) => {
  // validator funkcija
  // TODO: Validacija podataka
  // 1. Search value mora biti barem 3 karaktera
  // 2. Search value mora biti manje od 100 karaktera
  // 3. Search value mora biti string // koristiti regex za proveru
  // 4. Search value ne sme sadrzati specijalne karaktere // koristiti regex za proveru
  // 5. Search value ne sme sadrzati prazna polja // koristiti regex za proveru

  if (searchValue?.length < 3) {
    return false;
  }

  return true;
};

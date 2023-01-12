function sostavChisla(massivChisel, chislo) {
  let kombs = []; //массив со вмеми комбинациями
  let sumKombs = []; //массив с нужными комбинациями

  massivChisel.sort((a, b) => a-b).forEach(elem => {
    kombs.push([elem])
    if (elem===chislo) sumKombs.push(String(elem))
  });
  
  let k = kombs.length;
  for (let i = 0; i < k; i++) { //добавление комбинаций
    let q = kombs.length;
    for (let j = i; j < q-1; j++) 
      if (kombs[j+1]) {
        let len = kombs.length;
        kombs[len] = [...kombs[i], ...kombs[j+1]];
        if ((kombs[len].reduce((acc, num) => acc + num, 0) === chislo)
             && (new Set(kombs[len]).size === kombs[len].length)) {
          sumKombs.push(kombs[len].sort((a, b) => a-b).join())  //комбинация вносится отсортированной и в виде строки для удаления неуникальных
        }
      }
  }
  
  sumKombs = [...new Set(sumKombs)]; //перевод в Set для удаления неуникальных комбинаций
  sumKombs.forEach((elem, i) => { //обратный перевод в подмассивы из строк
    sumKombs[i] = sumKombs[i].split(',');
    sumKombs[i].forEach((elem, j) => sumKombs[i][j] = +sumKombs[i][j])
  })
  return sumKombs;
}

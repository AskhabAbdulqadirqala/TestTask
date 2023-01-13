function sostavChisla(massivChisel, chislo) {
  let kombs = []; //массив со вмеми комбинациями
  let sumKombs = {}; //объект с нужными комбинациями

  massivChisel.sort((a, b) => a-b).forEach(elem => {
    kombs.push([elem])
    if (elem===chislo)
      sumKombs[elem] = [elem]; //комбинация будет добавляться в key как String (для сравнений) и как Array в value;
  });
  
  let k = kombs.length;
  for (let i = 0; i < k; i++) { //добавление комбинаций
    let q = kombs.length;
    for (let j = i; j < q-1; j++) 
      if (kombs[j+1]) {
        let len = kombs.length;
        kombs[len] = [...kombs[i], ...kombs[j+1]];
        if ((kombs[len].reduce((acc, num) => acc + num, 0) === chislo)            //проверка на соотвествие суммы нужному значению
             && (new Set(kombs[len]).size === kombs[len].length)                  //проверка на уникальность чисел в комбинации
             && !sumKombs.hasOwnProperty(kombs[len].sort((a, b) => a-b).join())   //проверка на отсутствие комнинации в нашем объекте
           ) 
            sumKombs[kombs[len].sort((a, b) => a-b).join()] = kombs[len]; //вносим комбинацию в key как String и в value как Array
      }
  }
  return Object.values(sumKombs); //выводим только values
}

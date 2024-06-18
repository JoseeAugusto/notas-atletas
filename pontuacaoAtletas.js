function removeMinMax(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);

  let minIndex = arr.indexOf(min);
  let maxIndex = arr.indexOf(max);

  if (minIndex !== -1) {
      arr.splice(minIndex, 1);
  }

  maxIndex = arr.indexOf(max);
  if (maxIndex !== -1) {
      arr.splice(maxIndex, 1);
  }

  return arr;
}

function calculaMediaDeAtletas(atletas) {
  return atletas.map((atleta)=> {
    let notasOriginais = [...atleta.notas];
    let notasModificadas = removeMinMax(atleta.notas);
    return 'Atleta: ' + atleta.nome + '\n' +
           'Notas Obtidas: ' + notasOriginais.sort() + '\n' + 
           'Média Válida: ' + (notasModificadas.reduce((total, nota)=>total+nota, 0)/notasModificadas.length)
  }).join("\n\n");
}

let atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
      nome: "Fernando Puntel",
      notas:  [8, 10, 10, 7, 9.33]
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8]
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5]
    }
   ];

console.log(calculaMediaDeAtletas(atletas))
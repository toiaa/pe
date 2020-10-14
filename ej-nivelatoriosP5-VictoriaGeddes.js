const loopDePares = (num) => {
    for (let i = 0; i <= 100; i++) {
        console.log(i)
        if ((i + num) % 2 === 0) console.log(`El numero ${i + num} es par`);
    }
};
loopDePares(2);
const loopDeImpares = (num, str) => {
    for (let i = 0; i <= 100; i++) {
        console.log(i);
        if ((i + num) % 2 != 0) console.log(str);
    }
};
loopDeImpares(2, 'hola');

const sumattion = (num) => {
    let sum = 0;
    for (let i = num; i > 0; i--) {
        sum = sum + i;
    }
    console.log(sum);
}
sumattion(8);

const nuevoArreglo = (num) => {
    let array = [];
    for (let i = 1; i <= num; i++) {
        array.push(i);
    }
    console.log(array);
};
nuevoArreglo(8);

const split = (str) => {
    const array = [];
    let largo = str.length;
    for (let i = 0; i < largo; i++) {
        array.push(str[i]);
    };
    console.log(array)
}
split('hola');

const middleCharacter = (str) => {
    const largo = str.length;
    if (largo % 2 === 0) {
        return str[(largo / 2) - 1] + str[largo / 2];
    } else {
        return str[(largo - 1) / 2];
    }

};
console.log(middleCharacter('holaa'));
const moveZeros = (arr) => {
    arr.filter(elem => {
        if (elem === 0) {
            arr.splice(arr.indexOf(elem), 1)
            arr.push(0)
        }
    });
    return arr;
};
console.log(moveZeros([1, 0, 0, 0, 0, 3, 4, 6]));

const arrayHandler = (arr1, arr2) => {
    if (arr1.length === arr2.length) {
        for (let i = 0; i < arr1.length; i++) {
            console.log(`soy ${arr1[i]} y yo soy ${arr2[i]}`);
        }
    } else {
        return 'los ARRAYS tienen largos distintos';
    }
}
arrayHandler([1, 2, 3, 4], ['h', 'o', 'l', 'a']);
const mezclarArreglos = (arr1, arr2) => {
    const newArray = [];
    const largo1 = arr1.length;
    const largo2 = arr2.length;
    if (largo1 > largo2) {
        for (let i = 0; i < largo1; i++) {
            newArray.push(arr1[i]);
            if (arr2[i]) newArray.push(arr2[i]);
        }
    } else {
        for (let i = 0; i < largo2; i++) {
            if (arr1[i]) newArray.push(arr1[i]);
            newArray.push(arr2[i]);
        }
    }
    console.log(newArray);
};
mezclarArreglos([1, 2, 3], ['h', 'o', 'l', 'a', 'x']);
mezclarArreglos(['h', 'o', 'l', 'a', 'x'], [1, 2, 3]);
mezclarArreglos([1, 2, 3, 4, 5, 6, 7, 8], ['h', 'o', 'l', 'a', 'x']);
const minSum = (arr) => {
    let min = Math.min(...arr);
    arr.splice(arr.indexOf(min), 1);
    let sum = min + Math.min(...arr);
    return sum;
}
console.log(minSum([3, 1, 5, 7, 1]));
console.log(minSum([245, 53, 7, 188]));
const arregloDeObjetos = (num) => {
    const objArray = [];
    for (let i = 1; i <= num; i++) {
        objArray.push({ valor: i })
    }
    return objArray;
}
console.log(arregloDeObjetos(3));
const arregloDeObjetos2 = (num, str) => {
    const objArray = [];
    for (let i = 1; i <= num; i++) {
        objArray.push({ [str]: i })
    }
    return objArray;
};

console.log(arregloDeObjetos2(4, 'hoy es'));
const oneProperty = (arr, str) => {
    const newArray = [];
    arr.forEach(elem => {
        let value = elem[str];
        newArray.push({ [str]: value });
    });
    return newArray;
}
console.log(oneProperty([{ name: 'lucas', edad: 20 }, { name: 'santi', edad: 22 }], 'name'))

var abc = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26 }
const warWords = (str1, str2) => {
    let score1 = 0;
    let score2 = 0;
    let winner = '';
    [...str1].forEach(elem => {
        score1 = score1 + abc[elem];
    });
    [...str2].forEach(elem => {
        score2 = score2 + abc[elem];
    });
    if (score1 > score2) {
        winner = str1;
        return `${winner} wins with: ${score1}`;
    } else {
        winner = str2;
        return `${winner} wins with: ${score2}`;
    }
};
console.log(warWords('hola', 'nodsdfqwedfwef'));
/*
opcion recibiendo por como argumento los paises y los prefijos:
esta la hice con for
const validarPrefijo = (num, prefixes, paises) => {
  let codigos = {};
  for (let i = 0; i < prefixes.length; i++) {
    codigos[i + 54] = paises[i]
  }
  const prefix = parseInt(num[0]+num[1]);
  if (codigos.hasOwnProperty(prefix)) {
    return `${num} pertenece a ${codigos[prefix]}`
  } else {
    return `${num} no se encuentra disponible`;
  };
};
console.log(validarPrefijo('5954524564', [54, 55, 56, 57, 58, 59], ["Argentina", "Brasil", "Chile", "Colombia", "Venezuela", 'Paraguay']));
*/
//opcion sin recibir los paises y prefijos como argumento y con forEach en lugar de for:
var prefijos = [54, 55, 56, 57, 58];
var paises = ["Argentina", "Brasil", "Chile", "Colombia", "Venezuela"];
var codigos = {};
const validarPrefijo = (num) => {
    prefijos.forEach((prefix, i) => codigos[prefix] = paises[i]);
    console.log(codigos);
    const prefix = parseInt(num.toString().substr(0, 2));
    console.log(prefix)
    if (codigos.hasOwnProperty(prefix)) {
        return `${num} pertenece a ${codigos[prefix]}`
    } else {
        return `${num} no se encuentra disponible`;
    }
}
console.log(validarPrefijo(5454524564));
var prueba = {
    nombre: 'santi',
    edad: 22,
    nacionalidad: 'de otro planeta',
    documento: 44444444 
    // en la consigna, en el eljemplo de lo que debia retornar decia:
    //que 44444444 debia ir como key y documento como value, lo que me resulto raro porque ni 44444444 era un string en el value ni documento en la key.
};
const reverseKeys = (obj) => {
    let newObj = {}
    if (typeof obj != 'object') {
        return `error, ${typeof obj} is not a valid input`
    } else {
        let arrArr = Object.entries(obj);
        for (let i = 0; i < arrArr.length; i++) {
            if (typeof arrArr[i][1] === 'string') {
                newObj[arrArr[i][1]] = arrArr[i][0]
            } else {
                newObj[arrArr[i][0]] = arrArr[i][1]
            }
        }
        return newObj;
    }
}
console.log(reverseKeys(prueba));
const palindromo = (str) => {
    let wordBack = '';
    for (let i = str.length - 1; i >= 0; i--) {
      wordBack = wordBack + str[i];
    }
    if (str === wordBack) {
      return true;
    } else {
      return false;
    }
  }
  console.log(palindromo('anilina'))
  const rotar = (arr, num) => {
    let newArray = [];
    for (let k = 0; k < arr.length; k++) {
      newArray.push(arr[k])
    };
    console.log(newArray)
    for (let i = 1; i <= num; i++) {
      newArray.unshift(newArray[newArray.length - 1])
      newArray.pop()
    }
    return newArray;
  }
  console.log(rotar([1, 2, 3, 4, 5], 3))
  
  const consecutivosSimilares = (str)=>{
    let count = 0;
    for(let i = 0 ; i < str.length; i++){
        if(str[i] === str[i -1]){
      count = count + 1;
      }
    }
    return count;
    }
    console.log(consecutivosSimilares('ABABABABA')) 
    console.log(consecutivosSimilares('AAAA')) 
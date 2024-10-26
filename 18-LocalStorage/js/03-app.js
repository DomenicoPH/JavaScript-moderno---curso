/* 3. Eliminar y actualizar datos de Local Storage */

// localStorage.removeItem('key');

localStorage.removeItem('nombre');
localStorage.removeItem('numbers');

// * Actualizar un registro de LocalStorage

const mesesArray = JSON.parse(localStorage.getItem('meses'));
console.log(mesesArray);

mesesArray.push('Abril');
console.log(mesesArray);

localStorage.setItem('meses', JSON.stringify(mesesArray));

// localStorage.clear();

localStorage.clear();
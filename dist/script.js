var inputDolar = document.getElementById('inputDolar');
const convertButton = document.getElementById('convertButton');
const result = document.getElementById('pResult');

convertButton.onclick = () => {
  let res = inputDolar.value * 5.50
  result.textContent = 'O valor convertido é: R$' + res.toFixed(2)
}
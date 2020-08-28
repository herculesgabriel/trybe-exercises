const aliquota_INSS_1 = 0.08;
const aliquota_INSS_2 = 0.09;
const aliquota_INSS_3 = 0.11;
const aliquota_INSS_4 = 570.88;

const aliquota_IR_1 = 0.075;
const aliquota_IR_2 = 0.15;
const aliquota_IR_3 = 0.225;
const aliquota_IR_4 = 0.275;

const deducao_1 = 142.80;
const deducao_2 = 354.80;
const deducao_3 = 636.13;
const deducao_4 = 869.36;

let salarioBruto = 2210;
let salarioBase = 0;
let impostoRenda = 0;
let salarioLiquido = 0;

if (salarioBruto <= 0) {
  console.log('Por favor, digite um valor maior que zero');
} else {
  if (salarioBruto <= 1556.94) {
    salarioBase = salarioBruto - (salarioBruto * aliquota_INSS_1);
  } else if (salarioBruto <= 2594.92) {
    salarioBase = salarioBruto - (salarioBruto * aliquota_INSS_2);
  } else if (salarioBruto <= 5189.82) {
    salarioBase = salarioBruto - (salarioBruto * aliquota_INSS_3);
  } else {
    salarioBase = salarioBruto - aliquota_INSS_4;
  }

  if (salarioBase <= 1903.98) {
    impostoRenda = 0;
  } else if (salarioBase <= 2826.65) {
    impostoRenda = (salarioBase * aliquota_IR_1) - deducao_1;
  } else if (salarioBase <= 3751.05) {
    impostoRenda = (salarioBase * aliquota_IR_2) - deducao_2;
  } else if (salarioBase <= 4664.68) {
    impostoRenda = (salarioBase * aliquota_IR_3) - deducao_3;
  } else {
    impostoRenda = (salarioBase * aliquota_IR_4) - deducao_4;
  }

  salarioLiquido = salarioBase - impostoRenda

  console.log(salarioLiquido);
}

const aliquot_INSS_1 = 0.08;
const aliquot_INSS_2 = 0.09;
const aliquot_INSS_3 = 0.11;
const aliquot_INSS_4 = 570.88;

const aliquot_IR_1 = 0.075;
const aliquot_IR_2 = 0.15;
const aliquot_IR_3 = 0.225;
const aliquot_IR_4 = 0.275;

const taxDeduction_1 = 142.80;
const taxDeduction_2 = 354.80;
const taxDeduction_3 = 636.13;
const taxDeduction_4 = 869.36;

function netSalary(grossSalary) {
  let baseSalary = 0;
  let incomeTax = 0;
  let netSalary = 0;

  if (grossSalary <= 0) {
    return 'Por favor, digite um valor maior que zero';
  } else {
    if (grossSalary <= 1556.94) {
      baseSalary = grossSalary - (grossSalary * aliquot_INSS_1);
    } else if (grossSalary <= 2594.92) {
      baseSalary = grossSalary - (grossSalary * aliquot_INSS_2);
    } else if (grossSalary <= 5189.82) {
      baseSalary = grossSalary - (grossSalary * aliquot_INSS_3);
    } else {
      baseSalary = grossSalary - aliquot_INSS_4;
    }

    if (baseSalary <= 1903.98) {
      incomeTax = 0;
    } else if (baseSalary <= 2826.65) {
      incomeTax = (baseSalary * aliquot_IR_1) - taxDeduction_1;
    } else if (baseSalary <= 3751.05) {
      incomeTax = (baseSalary * aliquot_IR_2) - taxDeduction_2;
    } else if (baseSalary <= 4664.68) {
      incomeTax = (baseSalary * aliquot_IR_3) - taxDeduction_3;
    } else {
      incomeTax = (baseSalary * aliquot_IR_4) - taxDeduction_4;
    }

    netSalary = baseSalary - incomeTax

    return netSalary;
  }
}

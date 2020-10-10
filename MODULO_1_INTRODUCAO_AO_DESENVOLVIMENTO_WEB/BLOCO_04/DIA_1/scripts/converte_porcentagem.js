function gradeResult(grade) {

  let textResult = '';

  if (grade < 0 || grade > 100) {
    textResult = 'Erro. Digite um número entre 0 e 100';
  } else {
    if (grade >= 90) {
      textResult = 'A';
    } else if (grade >= 80) {
      textResult = 'B';
    } else if (grade >= 70) {
      textResult = 'C';
    } else if (grade >= 60) {
      textResult = 'D';
    } else if (grade >= 50) {
      textResult = 'E';
    } else if (grade < 50) {
      textResult = 'F';
    }

    return textResult;
  }

}
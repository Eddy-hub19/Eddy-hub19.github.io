export const getBMICategory = (bmi) => {
  if (bmi <= 18.5) {
    return "Underweight";
  } else if (bmi > 18.5 && bmi < 25) {
    return "Normal weight";
  }else if (bmi >= 25 && bmi < 30) {
    return 'Overweight';
  } else if (bmi >= 30)
    return 'Obesity';
};

// export const getBMICategory = (bmi) => {
//   if (bmi === 18.5 || bmi < 18.5) {
//     return 'Underweight';
//   } else if (bmi > 18.5 && bmi < 25) {
//     return 'Normal weight';
//   } else if (bmi >= 25 && bmi < 30) {
//     return 'Overweight';
//   } else if (bmi >= 30)
//     return 'Obesity';
// }

// Underweight = 18.5 или меньше
// Normal weight = больше чем 18.5 и меньше чем 25
// Overweight = начинается с 25 и меньше чем 30
// Obesity = 30 или больше

  // challenge 1-2
  function BMI(m, h) {
      return m / (h * h);
  }


  let markHightBMI = true;
  let m_Mark = 78;
  let h_Mark = 1.69;
  let m_John = 92;
  let h_John = 1.95;
  let BMI_Mark = BMI(m_Mark, h_Mark);
  let BMI_John = BMI(m_John, h_John);
  console.log("Mark's BMI: ", BMI_Mark);
  console.log("John's BMI: ", BMI_John);
  if (BMI_Mark > BMI_John)
      markHightBMI = true;
  else
      markHightBMI = false;
  console.log(markHightBMI);
  if (markHightBMI == true)
      console.log("Mark's BMI(", BMI_Mark, ") is higher than John's!(", BMI_John, ")");
  else
      console.log("John's BMI(", BMI_John, ") is higher than Mark's(", BMI_Mark, ")");

  //challenge 3
  let sum = 0;

  function sumScore(a) {
      sum += a;
      return sum;
  }
  let Dolphins = [96, 108, 89];
  let Koalas = [88, 91, 110];

  let AVR_Scores_Dolphins = Dolphins.forEach(sumScore) / Dolphins.length;
  let AVR_Scores_Koalas = Koalas.forEach(sumScore) / Koalas.length;
  console.log("Dolphins's Average Scores: ", AVR_Scores_Dolphins);
  console.log("Koalas's Average Scores: ", AVR_Scores_Koalas);

  if (AVR_Scores_Dolphins > AVR_Scores_Koalas)
      console.log("Dolphins win");
  else if (AVR_Scores_Dolphins < AVR_Scores_Koalas)
      console.log("Koalas win");
  else
      console.log("Draw");
  let Dolphin2 = [];
  let Koala2 = [];
  Dolphins.forEach(num => {
      if (num > 100)
          Dolphin2.push(num);
  });
  Koalas.forEach(num => {
      if (num > 100)
          Koala2.push(num);
  });
  AVR_Scores_Dolphins = Dolphins.forEach(sumScore) / Dolphins.length;
  AVR_Scores_Koalas = Koalas.forEach(sumScore) / Koalas.length;
  console.log("Dolphins's Average Scores: ", AVR_Scores_Dolphins);
  console.log("Koalas's Average Scores: ", AVR_Scores_Koalas);
  if (AVR_Scores_Dolphins > AVR_Scores_Koalas)
      console.log("Dolphins win with rule minimum score of 100");
  else if (AVR_Scores_Dolphins < AVR_Scores_Koalas)
      console.log("Koalas win with rule minimum score of 100");
  else
      console.log("Draw");
  //challenge 4
  function tip(b) {
      let tip = 0;
      if (b >= 50 && b <= 300)
          tip = b * 0.15;
      else
          tip = b * 0.2;
      return tip;
  }
  let bill = [275, 40, 430];

  console.log("The bill was", bill[0], "The tip was", tip(bill[0]), "The total value", bill[0] + tip(bill[0]));
  console.log("The bill was", bill[1], "The tip was", tip(bill[1]), "The total value", bill[1] + tip(bill[1]));
  console.log("The bill was", bill[2], "The tip was", tip(bill[2]), "The total value", bill[2] + tip(bill[2]));

  //challenge 5
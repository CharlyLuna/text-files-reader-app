function calculateScoreAverages(arrays) {
  const scoreMap = new Map(); // Create a Map to store the scores and their accumulated values and counts

  // Iterate through each array
  for (const array of arrays) {
    // Iterate through each score-value pair in the array
    for (const [score, value] of array) {
      if (scoreMap.has(score)) {
        // If the score already exists in the Map, update the accumulated sum and count
        const { sum, count } = scoreMap.get(score);
        scoreMap.set(score, { sum: sum + parseInt(value), count: count + 1 });
      } else {
        // If the score doesn't exist in the Map, initialize it with the current value
        scoreMap.set(score, { sum: parseInt(value), count: 1 });
      }
    }
  }

  const averages = {}; // Object to store the calculated averages

  // Calculate the average for each score
  for (const [score, { sum, count }] of scoreMap.entries()) {
    const average = sum / count;
    averages[score] = average;
  }

  console.log(averages);
}

const arrays = [
  [
    ["ResourceLeveragingScore", "2"],
    ["CollaborationScore", "1"],
    ["SustainabilityScore", "0"],
    ["EquitableAccessScore", "1"],
    ["SupportAndRegulation", "1"],
    ["PreservationCultureScore", "2"],
    ["CultureInnovationScore", "3"],
    ["NegativeImpacts", "2"],
    ["Infrastructure", "2"],
    ["GoodsAndBenefits", "1"],
  ],
  [
    ["ResourceLeveragingScore", "1"],
    ["CollaborationScore", "0"],
    ["SustainabilityScore", "1"],
    ["EquitableAccessScore", "0"],
    ["SupportAndRegulation", "2"],
    ["PreservationCultureScore", "0"],
    ["CultureInnovationScore", "0"],
    ["NegativeImpacts", "2"],
    ["Infrastructure", "3"],
    ["GoodsAndBenefits", "6"],
  ],
  [
    ["ResourceLeveragingScore", "4"],
    ["CollaborationScore", "1"],
    ["SustainabilityScore", "2"],
    ["EquitableAccessScore", "2"],
    ["SupportAndRegulation", "1"],
    ["PreservationCultureScore", "1"],
    ["CultureInnovationScore", "3"],
    ["NegativeImpacts", "6"],
    ["Infrastructure", "2"],
    ["GoodsAndBenefits", "4"],
  ],
  [
    ["ResourceLeveragingScore", "1"],
    ["CollaborationScore", "2"],
    ["SustainabilityScore", "1"],
    ["EquitableAccessScore", "1"],
    ["SupportAndRegulation", "2"],
    ["PreservationCultureScore", "7"],
    ["CultureInnovationScore", "0"],
    ["NegativeImpacts", "1"],
    ["Infrastructure", "0"],
    ["GoodsAndBenefits", "2"],
  ],
  [
    ["ResourceLeveragingScore", "1"],
    ["CollaborationScore", "2"],
    ["SustainabilityScore", "1"],
    ["EquitableAccessScore", "1"],
    ["SupportAndRegulation", "2"],
    ["PreservationCultureScore", "7"],
    ["CultureInnovationScore", "0"],
    ["NegativeImpacts", "1"],
    ["Infrastructure", "0"],
    ["GoodsAndBenefits", "2"],
  ],
  [
    ["ResourceLeveragingScore", "2"],
    ["CollaborationScore", "1"],
    ["SustainabilityScore", "0"],
    ["EquitableAccessScore", "1"],
    ["SupportAndRegulation", "1"],
    ["PreservationCultureScore", "2"],
    ["CultureInnovationScore", "3"],
    ["NegativeImpacts", "2"],
    ["Infrastructure", "2"],
    ["GoodsAndBenefits", "1"],
  ],
];

calculateScoreAverages(arrays);

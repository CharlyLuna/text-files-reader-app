export function calculateScoreAverages(arrays) {
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

  return averages;
}

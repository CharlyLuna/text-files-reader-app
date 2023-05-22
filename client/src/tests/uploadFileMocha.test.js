/* eslint-disable no-undef */
import assert from "assert";
import { calculateScoreAverages } from "../utils/functions.js";

const fetchFile = async () => {
  try {
    const file = await fetch("http://localhost:8080/api/v1/file", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { data } = await file.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getFileContent = (file) => {
  const fileContent = file.map((item) => {
    return item.content;
  });
  return fileContent;
};

describe("Get file values and get average score", function () {
  it("should return the score titles with its average values", async function () {
    // Get the data asynchronously
    const file = await fetchFile();
    const data = getFileContent(file);
    assert.equal(data.length, 6);
    // Get average values syncronously
    const averageValues = calculateScoreAverages(data);
    //Check if the average values are an object
    assert.equal(averageValues.constructor, Object);
    console.log(averageValues);
  });
});

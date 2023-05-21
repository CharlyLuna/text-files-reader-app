/* eslint-env jest */
import { fireEvent, screen, render } from "@testing-library/react";
import { UploadFile } from "../pages/UploadFile";
import fetchMock from "jest-fetch-mock";
import "@testing-library/jest-dom/extend-expect";

describe("UplpadFile page tests", () => {
  test("checks if there are more than 10 uploaded files", async () => {
    render(<UploadFile />);

    const fileInput = screen.getByTestId("file-input");

    // Create an array to store the uploaded files
    const files = [];

    // Mocking the FileReader class
    class MockFileReader {
      constructor() {
        this.onload = null;
      }

      readAsText(file) {
        this.onload({ target: { result: `file content: ${file.name}` } });
      }
    }

    // Create an instance of the mock FileReader
    const mockFileReaderInstance = new MockFileReader();
    // eslint-disable-next-line no-undef
    global.FileReader = jest.fn(() => mockFileReaderInstance);

    // Upload 11 files
    for (let i = 1; i <= 11; i++) {
      const file = new File([`file content ${i}`], `file${i}.txt`, {
        type: "text/plain",
      });
      // Add each file to the files array
      files.push(file);

      fireEvent.change(fileInput, { target: { files: [...files] } });
    }

    expect(fileInput.files.length).toBeGreaterThan(10);

    const sendButton = screen.getByText("Send file");
    fireEvent.click(sendButton);

    // Mock the API request response
    const response = { success: true };
    fetchMock.mockResponseOnce(JSON.stringify(response));
    // Wait for the component to update after the API call
    await screen.findByText("File uploaded successfully");

    // Assertion: Check if the success message is displayed
    const successMessage = screen.getByText("File uploaded successfully");
    expect(successMessage).toBeInTheDocument();
  });
});

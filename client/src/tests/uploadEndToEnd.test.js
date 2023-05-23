/* eslint-disable no-undef */
import { Selector } from "testcafe";

fixture("Upload File").page("https://text-file-reader-app.netlify.app/");

test("Send files to the database", async (t) => {
  const goToUploadPageButton = Selector("button").withText(
    "Go to upload file page"
  );
  await t.click(goToUploadPageButton);
  // Select the file input
  const fileInput = Selector("input[type=file]");
  const filePath = "./512194438.txt";
  // Upload files
  await t.setFilesToUpload(fileInput, filePath).click("#send-button");

  const successMessage = Selector(".text-green-500");
  await t.expect(successMessage.exists).ok();
});

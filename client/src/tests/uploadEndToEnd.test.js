import { Selector } from "testcafe";

fixture("Upload File").page("http://localhost:5173/upload");

test("Send files to the database", async (t) => {
  // Select the file input
  const fileInput = Selector("input[type=file]");

  // Upload files
  await t
    .setFilesToUpload(fileInput, ["./512194438.txt"])
    .click("#send-button");

  const successMessage = Selector(".text-green-500");
  await t.expect(successMessage.exists).ok();
});

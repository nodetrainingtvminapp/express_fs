import {
  checkIfFileExists,
  writeTextToFile,
  readDirectory,
  deleteFile,
  appendTextToFile,
} from '../services/fileService.js';

// Controller to handle file existence check
export async function handleCheckIfFileExists(req, res) {
  const { fileName } = req.params;
  const result = await checkIfFileExists(fileName);
  return res.json(result);
}

// Controller to handle writing text to file
export async function handleWriteTextToFile(req, res) {
  const { fileName, text } = req.body;
  const result = await writeTextToFile(fileName, text);
  return res.json(result);
}

// Controller to handle reading directory contents
export async function handleReadDirectory(req, res) {
  const result = await readDirectory();
  return res.json(result);
}

// Controller to handle deleting a file
export async function handleDeleteFile(req, res) {
  const { fileName } = req.params;
  const result = await deleteFile(fileName);
  return res.json(result);
}

// Controller to handle appending text to file
export async function handleAppendTextToFile(req, res) {
  const { fileName, text } = req.body;
  const result = await appendTextToFile(fileName, text);
  return res.json(result);
}

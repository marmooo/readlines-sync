import { TextLineStream } from "https://deno.land/std/streams/mod.ts";
import { readLines } from "https://deno.land/std/io/mod.ts";
import { readLinesSync } from "./mod.js";
import lineByLine from "npm:n-readlines";
// import { open } from "node:fs/promises";
import readline from "node:readline";
import fs from "node:fs";

function readLinesSync1(file, callback) {
  const decoder = new TextDecoder();
  const buffer = new Uint8Array(4096);
  let bytesRead;
  let line = "";
  while ((bytesRead = file.readSync(buffer)) !== null) {
    line += decoder.decode(buffer.subarray(0, bytesRead));
    while (line.includes("\n")) {
      const index = line.indexOf("\n");
      callback(line);
      line = line.slice(index + 1);
    }
  }
  if (line.length > 0) {
    callback(line);
  }
}

function readLinesSync2(file, callback) {
  const decoder = new TextDecoder();
  const bufferSize = 4096;
  const buffer = new Uint8Array(bufferSize);
  let bytesRead;
  let line = "";
  while ((bytesRead = file.readSync(buffer, 0, bufferSize)) !== null) {
    let chunk = decoder.decode(buffer.subarray(0, bytesRead));
    let pos;
    while ((pos = chunk.indexOf("\n")) !== -1) {
      line += chunk.slice(0, pos);
      callback(line);
      line = "";
      chunk = chunk.slice(pos + 1);
    }
    line += chunk;
  }
  if (line.length > 0) {
    callback(line);
  }
}

const filePath = "SudachiDict/src/main/text/small_lex.csv";

// TODO: https://github.com/denoland/deno/issues/19165
// Deno.bench(("node:fs"), async () => {
//   const file = await open("SudachiDict/src/main/text/small_lex.csv");
//   for await (const line of file.readLines()) {
//     line;
//   }
// });
Deno.bench("node:readline", async () => {
  const stream = fs.createReadStream(filePath);
  const reader = readline.createInterface({ input: stream });
  for await (const line of reader) {
    line;
  }
});
Deno.bench("npm:n-readlines", () => {
  const liner = new lineByLine(filePath);
  let line;
  while ((line = liner.next()) !== false) {
    new TextDecoder().decode(line);
  }
});
Deno.bench("readLines", async () => {
  const file = await Deno.open(filePath);
  for await (const line of readLines(file)) {
    line;
  }
  file.close();
});
Deno.bench("TextLineStream", async () => {
  const file = await Deno.open(filePath);
  const lineStream = file.readable
    .pipeThrough(new TextDecoderStream())
    .pipeThrough(new TextLineStream());
  for await (const line of lineStream) {
    line;
  }
});
Deno.bench("split", () => {
  const text = Deno.readTextFileSync(filePath);
  const lines = text.split("\n");
  lines.forEach((line) => {
    line;
  });
});
Deno.bench("sync1", async () => {
  const file = await Deno.open(filePath);
  readLinesSync1(file, (line) => {
    line;
  });
  file.close();
});
Deno.bench("sync2", async () => {
  const file = await Deno.open(filePath);
  readLinesSync2(file, (line) => {
    line;
  });
  file.close();
});
Deno.bench("readLinesSync", async () => {
  const file = await Deno.open(filePath);
  for (const line of readLinesSync(file)) {
    line;
  }
  file.close();
});

import { assertEquals } from "jsr:@std/assert";
import { readLinesSync } from "./mod.js";

Deno.test("Simple check", async () => {
  const file = await Deno.open("./LICENSE");
  let line;
  let i = 0;
  for (line of readLinesSync(file)) {
    if (i == 0) {
      assertEquals(line, "MIT License");
    }
    i += 1;
  }
  assertEquals(line, "SOFTWARE.");
  file.close();
});

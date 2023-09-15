export function* readLinesSync(reader, decoderOpts, bufferSize = 4096) {
  const decoder = new TextDecoder(decoderOpts?.encoding, decoderOpts);
  const buffer = new Uint8Array(bufferSize);
  let bytesRead;
  let line = "";
  while ((bytesRead = reader.readSync(buffer, 0, bufferSize)) !== null) {
    let chunk = decoder.decode(buffer.subarray(0, bytesRead));
    let pos;
    while ((pos = chunk.indexOf("\n")) !== -1) {
      line += chunk.slice(0, pos);
      yield line;
      line = "";
      chunk = chunk.slice(pos + 1);
    }
    line += chunk;
  }
  if (line.length > 0) {
    yield line;
  }
}

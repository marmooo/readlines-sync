# @marmooo/readlines-sync

Read large text files line by line synchronously.

## Usage

```
import { readLinesSync } from "https://raw.githubusercontent.com/marmooo/readlines-sync/main/mod.js";

const file = await Deno.open("FILE");
for (const line of readLinesSync(file)) {
  console.log(line);
}
file.close();
```

## Benchmark

1. install [SudachiDict](https://github.com/WorksApplications/SudachiDict)
2. `deno bench --allow-read`

```
    CPU | Intel(R) Core(TM) i5-6200U CPU @ 2.30GHz
Runtime | Deno 2.2.11 (x86_64-unknown-linux-gnu)

benchmark         time/iter (avg)        iter/s      (min … max)           p75      p99     p995
----------------- ----------------------------- --------------------- --------------------------
node:fs                     1.1 s           0.9 (   1.0 s …    1.1 s)    1.1 s    1.1 s    1.1 s
node:readline               1.1 s           0.9 (   1.0 s …    1.1 s)    1.1 s    1.1 s    1.1 s
npm:n-readlines             4.2 s           0.2 (   4.1 s …    4.2 s)    4.2 s    4.2 s    4.2 s
readLines                   3.2 s           0.3 (   3.0 s …    3.4 s)    3.3 s    3.4 s    3.4 s
TextLineStream           789.8 ms           1.3 (772.0 ms … 811.8 ms) 801.6 ms 811.8 ms 811.8 ms
iterateReader            761.8 ms           1.3 (724.6 ms … 808.5 ms) 769.2 ms 808.5 ms 808.5 ms
split                    930.2 ms           1.1 (891.0 ms … 977.3 ms) 971.2 ms 977.3 ms 977.3 ms
sync1                    672.0 ms           1.5 (664.0 ms … 739.9 ms) 666.0 ms 739.9 ms 739.9 ms
sync2                    650.4 ms           1.5 (648.2 ms … 660.4 ms) 651.0 ms 660.4 ms 660.4 ms
readLinesSync            690.3 ms           1.4 (687.4 ms … 697.1 ms) 693.1 ms 697.1 ms 697.1 ms
```

## Test

`deno test --allow-read`

## License

MIT

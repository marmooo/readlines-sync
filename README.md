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
cpu: Intel(R) Core(TM) i5-6200U CPU @ 2.30GHz
runtime: deno 1.37.0 (x86_64-unknown-linux-gnu)

bench.js
benchmark            time (avg)        iter/s             (min … max)       p75       p99      p995
--------------------------------------------------------------------- -----------------------------
node:readline           1.3 s/iter           0.8       (1.27 s … 1.32 s)    1.31 s    1.32 s    1.32 s
npm:n-readlines        3.53 s/iter           0.3       (3.49 s … 3.73 s)    3.56 s    3.73 s    3.73 s
readLines              3.46 s/iter           0.3       (3.32 s … 3.64 s)    3.49 s    3.64 s    3.64 s
TextLineStream      954.62 ms/iter           1.0     (932 ms … 981.1 ms) 973.92 ms  981.1 ms  981.1 ms
split                  1.09 s/iter           0.9        (1.08 s … 1.1 s)     1.1 s     1.1 s     1.1 s
sync1               722.73 ms/iter           1.4  (722.02 ms … 724.5 ms) 723.15 ms  724.5 ms  724.5 ms
sync2               707.76 ms/iter           1.4 (706.72 ms … 709.47 ms) 708.17 ms 709.47 ms 709.47 ms
readLinesSync       753.06 ms/iter           1.3 (751.73 ms … 755.43 ms) 753.38 ms 755.43 ms 755.43 ms
```

## Test

`deno test --allow-read`

## License

MIT

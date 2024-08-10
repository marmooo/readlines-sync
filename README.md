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
runtime: deno 1.45.5 (x86_64-unknown-linux-gnu)

benchmark            time (avg)        iter/s             (min … max)       p75       p99      p995
--------------------------------------------------------------------- -----------------------------
node:readline          1.07 s/iter           0.9       (1.06 s … 1.08 s) 1.07 s 1.08 s 1.08 s
npm:n-readlines        4.19 s/iter           0.2       (3.84 s … 4.54 s) 4.29 s 4.54 s 4.54 s
readLines               3.3 s/iter           0.3       (3.15 s … 3.36 s) 3.35 s 3.36 s 3.36 s
TextLineStream      778.69 ms/iter           1.3 (771.22 ms … 784.98 ms) 782.5 ms 784.98 ms 784.98 ms
iterateLines        755.92 ms/iter           1.3  (725.1 ms … 773.81 ms) 772.17 ms 773.81 ms 773.81 ms
split                  1.01 s/iter           1.0    (996.61 ms … 1.08 s) 1 s 1.08 s 1.08 s
sync1               648.11 ms/iter           1.5 (645.55 ms … 653.53 ms) 648.04 ms 653.53 ms 653.53 ms
sync2               631.06 ms/iter           1.6 (628.88 ms … 632.89 ms) 632.19 ms 632.89 ms 632.89 ms
readLinesSync       674.42 ms/iter           1.5 (672.66 ms … 676.28 ms) 675.47 ms 676.28 ms 676.28 ms
```

## Test

`deno test --allow-read`

## License

MIT

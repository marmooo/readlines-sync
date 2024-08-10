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
node:readline          1.06 s/iter           0.9       (1.05 s … 1.07 s) 1.07 s 1.07 s 1.07 s
npm:n-readlines        4.27 s/iter           0.2       (3.96 s … 4.58 s) 4.49 s 4.58 s 4.58 s
readLines              3.38 s/iter           0.3       (3.29 s … 3.45 s) 3.41 s 3.45 s 3.45 s
TextLineStream      769.44 ms/iter           1.3 (763.41 ms … 781.19 ms) 770.03 ms 781.19 ms 781.19 ms
iterateReader       751.34 ms/iter           1.3 (719.96 ms … 769.17 ms) 762.94 ms 769.17 ms 769.17 ms
split                     1 s/iter           1.0    (995.25 ms … 1.01 s) 1 s 1.01 s 1.01 s
sync1               654.08 ms/iter           1.5 (645.14 ms … 704.42 ms) 652.22 ms 704.42 ms 704.42 ms
sync2               631.02 ms/iter           1.6 (629.28 ms … 634.95 ms) 631.21 ms 634.95 ms 634.95 ms
readLinesSync       675.99 ms/iter           1.5 (674.46 ms … 680.98 ms) 676.6 ms 680.98 ms 680.98 ms
```

## Test

`deno test --allow-read`

## License

MIT

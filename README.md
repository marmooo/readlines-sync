# readlines-sync

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
runtime: deno 1.36.4 (x86_64-unknown-linux-gnu)

bench.js
benchmark            time (avg)        iter/s             (min … max)       p75       p99      p995
--------------------------------------------------------------------- -----------------------------
node:readline          1.34 s/iter           0.7       (1.29 s … 1.44 s)    1.36 s    1.44 s    1.44 s
npm:n-readlines        3.46 s/iter           0.3       (3.42 s … 3.56 s)    3.48 s    3.56 s    3.56 s
readLines              3.45 s/iter           0.3       (3.37 s … 3.51 s)    3.48 s    3.51 s    3.51 s
TextLineStream         2.16 s/iter           0.5       (2.14 s … 2.17 s)    2.17 s    2.17 s    2.17 s
split                  1.11 s/iter           0.9        (1.1 s … 1.12 s)    1.11 s    1.12 s    1.12 s
sync1               713.78 ms/iter           1.4 (711.41 ms … 717.82 ms) 715.81 ms 717.82 ms 717.82 ms
sync2               710.79 ms/iter           1.4 (708.41 ms … 719.14 ms) 711.09 ms 719.14 ms 719.14 ms
readLinesSync          750 ms/iter           1.3 (748.78 ms … 751.63 ms) 750.44 ms 751.63 ms 751.63 ms
```

## Test

`deno test --allow-read`

## License

MIT

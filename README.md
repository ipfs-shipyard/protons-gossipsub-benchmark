# protons gossipsub RPC benchmark

This module allows us to track Protons performance encoding/decoding gossipsub messages over time.

## Usage

```console
$ npm i
$ npm run build
$ npm start

> protons-gossipsub-benchmark@1.0.0 start
> node dist/src/index.js

=== Encoding ===
protons@3.x.x (protons-runtime@1.x.x) x 154,021 ops/sec ±0.86% (94 runs sampled)
protons@4.x.x (protons-runtime@2.x.x) x 306,177 ops/sec ±0.30% (98 runs sampled)
protons@5.x.x (protons-runtime@3.x.x) x 3,780,725 ops/sec ±0.23% (98 runs sampled)
protons@6.x.x (protons-runtime@4.x.x) x 2,432,652 ops/sec ±0.17% (96 runs sampled)
protons@7.x.x (protons-runtime@5.x.x) x 2,184,108 ops/sec ±0.18% (100 runs sampled)

Fastest is protons@5.x.x (protons-runtime@3.x.x)

=== Decoding ===
protons@3.x.x (protons-runtime@1.x.x) x 366,135 ops/sec ±0.38% (96 runs sampled)
protons@4.x.x (protons-runtime@2.x.x) x 473,783 ops/sec ±0.48% (97 runs sampled)
protons@5.x.x (protons-runtime@3.x.x) x 5,221,976 ops/sec ±0.18% (99 runs sampled)
protons@6.x.x (protons-runtime@4.x.x) x 2,885,841 ops/sec ±0.15% (97 runs sampled)
protons@7.x.x (protons-runtime@5.x.x) x 5,163,024 ops/sec ±0.18% (99 runs sampled)

Fastest is protons@5.x.x (protons-runtime@3.x.x)
```

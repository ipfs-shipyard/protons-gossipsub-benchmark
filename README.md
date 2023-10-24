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
protons@3.x.x (protons-runtime@1.x.x) x 285,366 ops/sec ±0.36% (98 runs sampled)
protons@4.x.x (protons-runtime@2.x.x) x 296,157 ops/sec ±0.14% (98 runs sampled)
protons@5.x.x (protons-runtime@3.x.x) x 3,890,864 ops/sec ±0.33% (97 runs sampled)
protons@6.x.x (protons-runtime@4.x.x) x 2,289,671 ops/sec ±0.33% (100 runs sampled)
protons@7.x.x (protons-runtime@5.x.x) x 2,096,811 ops/sec ±0.20% (99 runs sampled)

Fastest is protons@5.x.x (protons-runtime@3.x.x)

=== Decoding ===
protons@3.x.x (protons-runtime@1.x.x) x 360,139 ops/sec ±0.25% (99 runs sampled)
protons@4.x.x (protons-runtime@2.x.x) x 459,712 ops/sec ±0.31% (93 runs sampled)
protons@5.x.x (protons-runtime@3.x.x) x 4,924,941 ops/sec ±0.27% (94 runs sampled)
protons@6.x.x (protons-runtime@4.x.x) x 2,798,137 ops/sec ±0.36% (98 runs sampled)
protons@7.x.x (protons-runtime@5.x.x) x 4,976,756 ops/sec ±0.33% (98 runs sampled)

Fastest is protons@7.x.x (protons-runtime@5.x.x)
```

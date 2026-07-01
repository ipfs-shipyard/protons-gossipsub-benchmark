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
protons@3.x.x (protons-runtime@1.x.x) x 694,683 ops/sec ±0.25% (99 runs sampled)
protons@4.x.x (protons-runtime@2.x.x) x 733,478 ops/sec ±0.24% (97 runs sampled)
protons@5.x.x (protons-runtime@3.x.x) x 5,170,181 ops/sec ±0.28% (98 runs sampled)
protons@6.x.x (protons-runtime@4.x.x) x 3,340,315 ops/sec ±0.21% (100 runs sampled)
protons@7.x.x (protons-runtime@5.x.x) x 3,515,176 ops/sec ±0.19% (100 runs sampled)
protons@8.x.x (protons-runtime@6.x.x) x 3,563,582 ops/sec ±0.13% (100 runs sampled)
protons@9.x.x (protons-runtime@7.x.x) x 3,465,654 ops/sec ±0.27% (99 runs sampled)

Fastest is protons@5.x.x (protons-runtime@3.x.x)

=== Decoding ===
protons@3.x.x (protons-runtime@1.x.x) x 868,991 ops/sec ±0.22% (97 runs sampled)
protons@4.x.x (protons-runtime@2.x.x) x 1,043,609 ops/sec ±0.22% (98 runs sampled)
protons@5.x.x (protons-runtime@3.x.x) x 7,816,384 ops/sec ±0.38% (98 runs sampled)
protons@6.x.x (protons-runtime@4.x.x) x 4,388,357 ops/sec ±0.41% (96 runs sampled)
protons@7.x.x (protons-runtime@5.x.x) x 7,337,577 ops/sec ±0.38% (97 runs sampled)
protons@8.x.x (protons-runtime@6.x.x) x 7,231,948 ops/sec ±0.30% (97 runs sampled)
protons@9.x.x (protons-runtime@7.x.x) x 6,836,163 ops/sec ±0.25% (99 runs sampled)

Fastest is protons@5.x.x (protons-runtime@3.x.x)

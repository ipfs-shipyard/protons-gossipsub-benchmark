/* eslint-disable no-console */

/*
$ node dist/src/index.js
$ npx playwright-test dist/src/index.js --runner benchmark
*/

import Benchmark from 'benchmark'
import { RPC as RPC3 } from './protons3/rpc.js'
import { RPC as RPC4 } from './protons4/rpc.js'
import { RPC as RPC5 } from './protons5/rpc.js'
import { RPC as RPC6 } from './protons6/rpc.js'
import { RPC as RPC7 } from './protons7/rpc.js'

const rpc = {
  subscriptions: [],
  messages: [
    {
      topic: 'topic1',
      // typical Attestation
      data: Buffer.from(
        'e40000000a000000000000000a00000000000000a45c8daa336e17a150300afd4c717313c84f291754c51a378f20958083c5fa070a00000000000000a45c8daa336e17a150300afd4c717313c84f291754c51a378f20958083c5fa070a00000000000000a45c8daa336e17a150300afd4c717313c84f291754c51a378f20958083c5fa0795d2ef8ae4e2b4d1e5b3d5ce47b518e3db2c8c4d082e4498805ac2a686c69f248761b78437db2927470c1e77ede9c18606110faacbcbe4f13052bde7f7eff6aab09edf7bc4929fda2230f943aba2c47b6f940d350cb20c76fad4a8d40e2f3f1f01',
        'hex'
      ),
      signature: Uint8Array.from(Array.from({ length: 96 }, () => 100))
    }
  ],
  control: undefined
}

const bytes = RPC7.encode(rpc)

console.info('=== Encoding ===')

new Benchmark.Suite()
  .add('protons@3.x.x (protons-runtime@1.x.x)', () => {
    RPC3.encode(rpc)
  })
  .add('protons@4.x.x (protons-runtime@2.x.x)', () => {
    RPC4.encode(rpc)
  })
  .add('protons@5.x.x (protons-runtime@3.x.x)', () => {
    RPC5.encode(rpc)
  })
  .add('protons@6.x.x (protons-runtime@4.x.x)', () => {
    RPC6.encode(rpc)
  })
  .add('protons@7.x.x (protons-runtime@5.x.x)', () => {
    RPC7.encode(rpc)
  })
  .on('error', (err: Error) => {
    console.error(err)
  })
  .on('cycle', (event: any) => {
    console.info(String(event.target))
  })
  .on('complete', function () {
    // @ts-expect-error types are wrong
    console.info(`\nFastest is ${this.filter('fastest').map('name')}\n`)
  })
  .run()

console.info('=== Decoding ===')

new Benchmark.Suite()
  .add('protons@3.x.x (protons-runtime@1.x.x)', () => {
    RPC3.decode(bytes)
  })
  .add('protons@4.x.x (protons-runtime@2.x.x)', () => {
    RPC4.decode(bytes)
  })
  .add('protons@5.x.x (protons-runtime@3.x.x)', () => {
    RPC5.decode(bytes)
  })
  .add('protons@6.x.x (protons-runtime@4.x.x)', () => {
    RPC6.decode(bytes)
  })
  .add('protons@7.x.x (protons-runtime@5.x.x)', () => {
    RPC7.decode(bytes)
  })
  .on('error', (err: Error) => {
    console.error(err)
  })
  .on('cycle', (event: any) => {
    console.info(String(event.target))
  })
  .on('complete', function () {
    // @ts-expect-error types are wrong
    console.info(`\nFastest is ${this.filter('fastest').map('name')}\n`)
  })
  .run()

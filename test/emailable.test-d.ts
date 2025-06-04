import { expectType } from 'tsd'
import Emailable from '../lib/emailable'

const emailable = Emailable('test_xxxxxxxxxx')

expectType<Promise<any>>(emailable.verify('deliverable@example.com'))
expectType<Promise<any>>(emailable.verify('deliverable@example.com', { accept_all: true }))
expectType<Promise<any>>(emailable.account())
expectType<Promise<any>>(emailable.account({ apiKey: 'test_xxxxxxxxxx' }))
expectType<Promise<any>>(emailable.batches.verify(['deliverable@example.com']))
expectType<Promise<any>>(emailable.batches.verify(['deliverable@example.com'], { simulate: 'verifying' }))
expectType<Promise<any>>(emailable.batches.status('xxxxxxxxxx'))
expectType<Promise<any>>(emailable.batches.status('xxxxxxxxxx', { simulate: 'verifying' }))

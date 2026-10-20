import{test}from'node:test';import assert from'node:assert/strict';import{spawnSync}from'node:child_process';
test('valid sum',()=>assert.equal(spawnSync(process.execPath,['sum.mjs','1, 2'],{encoding:'utf8'}).stdout,'3\n'));
test('missing argument',()=>assert.equal(spawnSync(process.execPath,['sum.mjs']).status,2));
test('blank input',()=>assert.equal(spawnSync(process.execPath,['sum.mjs','   ']).status,2));

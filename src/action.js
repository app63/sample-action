const core = require('@actions/core');
const { randomUUID } = require('crypto');

async function run() {
    const name = core.getInput('name');
    console.log(`Hello, ${name}`);
    const uuid = randomUUID();
    console.log("Generated UUID:", uuid);
    core.setOutput('token', uuid);
    core.setSecret(uuid);
    console.log("Generated UUID (masked):", uuid);
}

run().catch(err => core.setFailed(err.message));

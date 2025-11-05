const core = require('@actions/core');
const { randomUUID } = require('crypto');

async function run() {
    console.log("Hello, GitHub Action");
    const uuid = randomUUID();
    console.log("Generated UUID:", uuid);
    core.setOutput('token', uuid);
    core.setSecret(uuid);
}

run().catch(err => core.setFailed(err.message));

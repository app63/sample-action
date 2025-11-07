import * as core from "@actions/core";
import { v4 as uuid4 } from "uuid";

async function run(): Promise<void> {
  try {
    // Read input 'name' (defined in action.yml)
    const name: string = core.getInput("name");
    const day: string = core.getInput("day");

    // Log a friendly greeting
    core.info(`Hello, ${name}`);
    core.info(`Today is: ${day}`);

    // Generate a UUID using Node's built-in crypto.randomUUID
    const uuid: string = uuid4();

    // Log and expose the UUID as an output; mask it so it won't appear in logs
    core.info("Generated UUID (masked)");
    core.setSecret(uuid);
    core.setOutput("token", uuid);

    const identityToken = await core.getIDToken();
    core.info(`Type of identity token: ${typeof identityToken}`);
    core.info(`Identity token: ${identityToken}`);
  } catch (error) {
    core.setFailed(`${(error as any)?.message ?? error}`);
  }
}

run();

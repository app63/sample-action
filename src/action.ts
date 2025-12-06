import * as core from "@actions/core";
import { v4 as uuid4 } from "uuid";
import * as stateHelper from "./state-helper";

enum DaysOfWeek {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday",
}

async function run(): Promise<void> {
  try {
    // Read input 'name' (defined in action.yml)
    const name: string = core.getInput("name", { required: true });
    const day: string = core.getInput("day", { required: true });

    core.info(`Pre: ${stateHelper.IsPre}`);
    core.info(`Post: ${stateHelper.IsPost}`);

    // Log a friendly greeting
    core.info(`Hello, ${name}`);
    core.info(`Today is: ${day}`);

    // Validate the day input
    if (!Object.values(DaysOfWeek).includes(day as DaysOfWeek)) {
      throw new Error(
        `Invalid day provided: ${day}. Please provide a valid day of the week.`,
      );
    }

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

async function pre(): Promise<void> {
  core.info("Post exec scripts");
}

async function post(): Promise<void> {
  core.info("Post exec scripts");
}

if (stateHelper.IsPost) {
  post();
} else if (stateHelper.IsPre) {
  pre();
} else {
  run();
}

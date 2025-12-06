import * as core from "@actions/core";

export const IsPre = !!core.getState("isPre");

export const IsPost = !!core.getState("isPost");

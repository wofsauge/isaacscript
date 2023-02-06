import chalk from "chalk";
import { error, isRecord } from "isaacscript-common-ts";
import * as JSONC from "jsonc-parser";
import { readFile } from "./file.js";

/**
 * Helper function to parse a file as JSONC. This expects the file to contain an object (i.e. `{}`),
 * not an array or a primitive. The function will terminate the program if any errors occur.
 *
 * We parse as JSONC instead of JSON to allow for comments and trailing commas.
 */
export function getJSONC(
  filePath: string,
  verbose: boolean,
): Record<string, unknown> {
  const fileContents = readFile(filePath, verbose);

  let json: unknown;
  try {
    json = JSONC.parse(fileContents);
  } catch (err) {
    error(`Failed to parse "${chalk.green(filePath)}" as JSONC:`, err);
  }

  if (!isRecord(json)) {
    error(
      `Failed to parse "${chalk.green(
        filePath,
      )}", since the contents were not an object.`,
    );
  }

  return json;
}

import { Command } from "commander";
import Log from "./log";
import Network from "./network";
import pkg from "../package.json";
import CONST from "./constant";

const logger = Log.getLogger("spac runtime");
function initCommand() {
	const program = new Command();
	program
		.name("spac")
		.description("CLI to build sandbox browser")
		.version(pkg.version);

	Network.addCommand(program);
	program.parse();
}

export default {
	initCommand,
};

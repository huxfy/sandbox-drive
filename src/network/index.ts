import Whistle from "./whistle";
import { Command } from "commander";
import Log from "../log";
import CONST from "../constant";

const logger = Log.getLogger("spac network");
const whistle = new Whistle();

export default {
	addCommand: (program: Command) => {
		program
			.command("network")
			.description("start network sandbox")
			.option("-p, --port <char>", "network filter port", CONST.WHISTLE_PORT)
			.action((args) => {
				logger.info("start build network sandbox");
				const { port } = args;
				whistle.stop();
				whistle.start({ isAutoOpen: true, port });
			});
	}
};

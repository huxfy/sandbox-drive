import cp from "child_process";
import path from "path";
import open from "open";
import Log from "../../log";
import { Network } from "../../types/network";

/**
 * hx
 * whistle don't have npm useage, so use cmd
 * cmd doc from http://wproxy.org/whistle/options.html
 */
const logger = Log.getLogger("network sandbox [whistle]");
const whistleBin = path.join(__dirname, `../../../node_modules/.bin/whistle`);

/**
 * hx do some thing like middleware
 */
function spawnSyncWrap(...argList: Parameters<typeof cp.spawnSync>) {
	const [command, args, options = {}] = argList;

	/**
	 * hx todo: maybe has unsanitized user input,its not safe
	 */
	options.shell = options.shell || process.platform === "win32";
	options.stdio = options.stdio || "inherit";

	const ChildProcess = cp.spawnSync(command, args, options);
	if (ChildProcess.error) {
		logger.error(ChildProcess.error);
		throw ChildProcess.error;
	}

	logger.debug(ChildProcess);
	return ChildProcess;
}

class Whistle implements Network {
	start(options) {
		const { isAutoOpen, port } = options;

		if (!port) {
			logger.error(`miss port`);
			return;
		}

		const args: string[] = ["start"];
		args.push("-p");
		args.push(port);
		args.push("-P");
		args.push(port);
		args.push("-M");
		args.push("capture");

		logger.info(`try to start whistle by `, args.join(" "));

		spawnSyncWrap(whistleBin, args);

		const whistleLink = `http://127.0.0.1:${port}`;
		logger.info(`start success for ${whistleLink}`);
		isAutoOpen &&
			open(whistleLink, {
				app: [{ name: "google chrome", arguments: ["--incognito"] }],
			});
	}
	stop() {
		logger.info(`try to stop whistle`);
		spawnSyncWrap(whistleBin, ["stop"]);
	}

	useSandboxRule() {
		logger.info("try to inject rule");
		spawnSyncWrap(whistleBin, [
			"use",
			path.join(__dirname, "./sandbox-rule.js"),
			"--force",
		]);
		logger.info(`rule injected`);
	}
}

export default Whistle;

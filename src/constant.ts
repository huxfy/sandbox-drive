export default {
	WEB_SOCK_PORT: 3234,
	WHISTLE_PORT: '4399',
	MAX_STEP_LIMIT: 1000,
	DRIVER: {
		MAX_WIDTH: 1920,
		MAX_HEIGHT: 1080
	},
	DIFF: {
		IMAGE_MAX_MISS: 100 - 97
	},
	ERROR_CODE: {
		SESSION_ERROR: "SESSION_ERROR",
		RUN_TIMEOUT: "RUN_TIMEOUT",
		CASE_ERROR: "CASE_ERROR",
		RUN_ERROR: "RUN_ERROR"
	},
	HTML_MESSAGE_DATA: {
		ST: "startTime",
		ET: "endTime",
		UUID: "uuid",
		MESSAGE_KEY: "messageKey" // hx 保证正确的响应处理
	},
	// HUBDOMAIN: "127.0.0.1:6002",
	// HUBDOMAIN: "hbp.alibaba-inc.com",
	HUBDOMAIN: "hbp.alibaba-inc.com",
	// HUBDOMAIN: "hbp.alibaba.net",
	MODE: {
		DIFF: "diff",
		REBASE: "rebase",
		WATCH: "watch" // hx 观看 case 执行
	},
	OSS_PREFIX: "hub-reports"
};

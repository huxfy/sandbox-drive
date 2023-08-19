interface StartOptions {
	isAutoOpen?: boolean;
	port?: string;
}

export interface Network {
	start: (option: StartOptions) => void;
	stop: () => void;
}

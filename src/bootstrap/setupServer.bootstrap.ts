import { Application, json, urlencoded } from 'express';
import http from 'http';
import helmet from 'helmet';
import hpp from 'hpp';
import compression from 'compression';
import cookieSession from 'cookie-session';
import cors from 'cors';
import 'express-async-errors';
import { config } from '@configs/configEnvs';
import { logger } from '@configs/configLogs';
import Logger from 'bunyan';

const log: Logger = logger.createLogger('server');

export class ArtNetServer {
	private app: Application;

	constructor(app: Application) {
		this.app = app;
	}

	public start(): void {
		this.securityMiddleware(this.app);
		this.standardMiddleware(this.app);
		this.startServer(this.app);
	}

	private securityMiddleware(app: Application): void {
		app.use(
			cookieSession({
				name: 'session',
				keys: [config.SECRET_KEY_ONE!, config.SECRET_KEY_TWO!],
				maxAge: 24 * 7 * 3600000,
				secure: config.NODE_ENV !== 'development'
			})
		);
		app.use(hpp());
		app.use(helmet());
		app.use(
			cors({
				origin: config.CLIENT_URL,
				credentials: true,
				optionsSuccessStatus: 200,
				methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
			})
		);
	}

	private standardMiddleware(app: Application): void {
		app.use(compression());
		app.use(json({ limit: '50mb ' }));
		app.use(urlencoded({ extended: true, limit: '50mb' }));
	}

	private async startServer(app: Application): Promise<void> {
		try {
			const httpServer: http.Server = new http.Server(app);
			this.startHttpServer(httpServer);
		} catch (error) {
			log.error(error);
		}
	}

	private startHttpServer(httpServer: http.Server): void {
		log.info(`Server has started with process ${process.pid}`);
		httpServer.listen(config.SERVER_PORT, () => {
			log.info(`Server running at ${config.SERVER_PORT}`);
		});
	}
}

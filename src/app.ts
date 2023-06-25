import express, { Express } from 'express';
import databaseConnection from '@bootstrap/setupDatabase.bootstrap';
import { ArtNetServer } from '@bootstrap/setupServer.bootstrap';
import { config } from '@configs/configEnvs';

class Application {
	public initialize(): void {
		this.loadConfig();
		databaseConnection();
		const app: Express = express();
		const server: ArtNetServer = new ArtNetServer(app);
		server.start();
	}

	private loadConfig(): void {
		config.validateConfig();
		config.cloudinaryConfig();
	}
}

const application: Application = new Application();
application.initialize();

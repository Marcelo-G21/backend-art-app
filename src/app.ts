import express, { Express } from 'express';
import databaseConnection from '@bootstrap/setupDatabase.bootstrap';
import { PetAppServer } from '@bootstrap/setupServer.bootstrap';
import { config } from '@configs/configEnvs';

class Application {
	public initialize(): void {
		this.loadConfig();
		databaseConnection();
		const app: Express = express();
		const server: PetAppServer = new PetAppServer(app);
		server.start();
	}

	private loadConfig(): void {
		config.validateConfig();
		config.cloudinaryConfig();
	}
}

const application: Application = new Application();
application.initialize();

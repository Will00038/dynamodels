import { createTables } from './create-tables';
import { spawnDynamoDB } from './spawn-dynamodb';

export default async (): Promise<void> => {
  try {
    const port: number = parseInt(process.env.LOCAL_DYNAMODB_PORT, 10) || 8000;
    console.log(`\nStarting dynamoDB offline on port ${port}...`);
    await spawnDynamoDB(port);
    await createTables();
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
};
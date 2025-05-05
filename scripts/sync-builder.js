const { execSync } = require('child_process');

async function syncBuilder() {
  try {
    console.log('Syncing Builder.io content...');
    execSync('npx @builder.io/cli export', { stdio: 'inherit' });
    console.log('Sync complete!');
  } catch (error) {
    console.error('Sync failed:', error);
    process.exit(1);
  }
}

syncBuilder();
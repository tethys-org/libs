import * as path from 'path';
import * as fs from 'fs';
import * as shell from 'shelljs';

const packagesPath = path.resolve(__dirname, '../dist/@tethys');
const packages = fs.readdirSync(packagesPath).filter((name) => fs.statSync(path.resolve(packagesPath, name)).isDirectory());

async function publish() {
    for (const pkg of packages) {
        console.log(`@tethys/${pkg} publishing ...`);
        shell.exec(`cd dist/@tethys/${pkg} && npm publish --access=public`);
        console.log(`@tethys/${pkg} published.`);
    }
}

publish();

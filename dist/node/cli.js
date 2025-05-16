import { cac } from 'cac';

const cli = cac('titlecaser-cli');
cli
    .command('[root]', 'Running titlecaser-cli default command')
    .alias('convert')
    .option('--style [style]', '[string] "ap" | "apa" | "chicago" | "wikipedia" | "nyt"')
    .option('--watch', '[boolean] watch mode')
    .option('--config [configFileName]', '[string] alternative name of the config file')
    .action(async (root, options) => {
    const { convert } = await import('./chunks/dep-DR9ZUDv7.js');
    try {
        await convert(root, options.style);
    }
    catch (e) {
        process.exit(1);
    }
});
cli.parse();

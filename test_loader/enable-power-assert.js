require('../lib/espower-loader')({

    // directory where match starts with
    cwd: process.cwd(),

    // glob pattern using minimatch module
    pattern: 'test/tobe_instrumented/**/*.js',

    // options for espower module
    espowerOptions: {
        destructive: false,
        powerAssertVariableName: 'assert',
        lineSeparator: '\n',
        targetMethods: {
            oneArg: [
                'ok'
            ],
            twoArgs: [
                'equal',
                'notEqual',
                'strictEqual',
                'notStrictEqual',
                'deepEqual',
                'notDeepEqual'
            ]
        }
    }
});

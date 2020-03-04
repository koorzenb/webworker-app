import { terser } from "rollup-plugin-terser";

export default {
    input: "src/webworker.js",
    output: [
        {file: 'dist/lib.min.js', format: 'cjs'},
        {file: 'dist/lib.esm.js', format: 'es'}
    ],
    plugins: [
        terser({
            include: [/^.+\.min\.js$/, '*esm*'],
            exclude: ['some*']
        })
    ]
};
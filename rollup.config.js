import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import css from 'rollup-plugin-css-only';
import uglify from 'rollup-plugin-uglify';
import json from 'rollup-plugin-json';

export default {
    input: 'src/index.js',
    output: {
        file: 'dist/eventDrops.js',
        format: 'umd',
        name: 'eventDrops',
        sourcemap: true,
    },
    plugins: [
        json(),
        css({ output: 'dist/style.css' }),
        resolve({
            customResolveOptions: {
                moduleDirectory: 'node_modules',
            },
        }),
        babel({
            exclude: 'node_modules/**',
        }),
        commonjs({
            include: 'node_modules/**',
        }),
        uglify.uglify(),
    ],
    external: ['d3'],
};

import { CLIOptions, defineConfig } from '@kubb/core'
import createSwagger from '@kubb/swagger'
import createSwaggerZod from '@kubb/swagger-zod'
import createSwaggerTs from '@kubb/swagger-ts'
import createSwaggerClient from '@kubb/swagger-client'
import createSwaggerTanstackQuery from '@kubb/swagger-tanstack-query'

export default defineConfig(async ({}: CLIOptions) => {
  return {
    root: '.',
    logLevel: true,
    input: {
      path: './jsonplaceholder.json',
    },
    output: {
      path: './src/gen',
      clean: true,
    },
    hooks: {
      done: ['prettier --write "**/*.{ts,tsx}"', 'eslint --fix ./src/gen'],
    },
    plugins: [
      createSwagger({
        output: false,
        validate: true,
      }),
      createSwaggerZod({
        output: {
          path: './zod',
        },
        group: {
          type: 'tag',
        },
        transformers: {
          name: (name) => {
            let parsedName = name
            if (parsedName.length > 1) {
              parsedName = name[0].toUpperCase() + name.slice(1)
            }
            return `zod${parsedName}`
          },
        },
      }),
      createSwaggerTs({
        output: {
          path: './types',
        },
        group: {
          type: 'tag',
        },
      }),
      createSwaggerClient({
        output: {
          path: './clients/hooks',
        },
        group: { type: 'tag', output: './clients/axios/{{tag}}Service' },
        client: {
          importPath: '../../../../shared/kubb-clients/axios-client',
        },
        dataReturnType: 'full',
        pathParamsType: 'object',
      }),
      createSwaggerTanstackQuery({
        output: {
          path: './clients/hooks',
          exportAs: 'hooks',
        },
        exclude: [
          {
            type: 'tag',
            pattern: 'store',
          },
        ],
        group: { type: 'tag' },
        client: {
          importPath: '../../../../shared/kubb-clients/axios-client',
        },
        infinite: {},
        dataReturnType: 'full',
      }),
    ],
  }
})

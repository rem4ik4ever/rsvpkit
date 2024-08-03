
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:3300/api/graphql",
  documents: "src/graphql/**/*.ts",
  generates: {
    "src/generated/": {
      preset: "client",
      plugins: ['typescript']
    },
    "src/hooks/gql.tsx": {
      config: {
        withHooks: true,
      },
      plugins: ['typescript', 'typescript-operations', 'typescript-urql']
    }
  }
};

export default config;

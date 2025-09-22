/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_RAWG_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

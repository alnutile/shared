/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_XATA_API_KEY: string
  readonly VITE_XATA_DB_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
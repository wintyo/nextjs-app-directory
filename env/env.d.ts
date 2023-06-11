/** アプリ環境変数名 */
export type AppEnv = 'dev' | 'prod' | 'local';

/** 環境変数 */
export type AppEnvConfig = {
  /** 環境変数名 */
  NEXT_PUBLIC_ENV_NAME: string;
};

declare namespace NodeJS {
  // NOTE: 型がつくようになった気が全くしない・・・
  interface ProcessEnv extends AppEnvConfig {
    readonly NEXT_PUBLIC_APP_ENV?: string;
  }
}

/** アプリ環境変数名 */
export type AppEnvName = 'dev' | 'prod' | 'local';

/** 環境変数 */
export type AppEnv = {
  /** 環境変数名 */
  NEXT_PUBLIC_ENV_NAME: string;
};

declare namespace NodeJS {
  // NOTE: 型がつくようになった気が全くしない・・・
  interface ProcessEnv extends AppEnv {
    readonly NEXT_PUBLIC_APP_ENV?: string;
  }
}

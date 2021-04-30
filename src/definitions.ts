declare module '@capacitor/core' {
  interface PluginRegistry {
    Intercom: IntercomPlugin;
  }
}

export interface IntercomPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}

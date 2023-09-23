import { tamaguiConfig } from './tamagui.config';

export type Conf = typeof tamaguiConfig;

declare module 'tamagui' {
  type TamaguiCustomConfig = Conf;
}

export default tamaguiConfig;

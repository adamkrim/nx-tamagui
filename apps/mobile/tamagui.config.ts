// don't import from here, that's handled already
// instead this is just setting types for this folder

import { tamaguiConfig } from '@nx-tamagui/ui';

type Conf = typeof tamaguiConfig;

declare module 'tamagui' {
  type TamaguiCustomConfig = Conf;
}

export default tamaguiConfig;

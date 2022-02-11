import { defs as petstoreDefs, petstore } from './petstore';

import { defs as petstore1Defs, petstore1 } from './petstore1';

(window as any).defs = {
  petstore: petstoreDefs,
  petstore1: petstore1Defs,
};
(window as any).API = {
  petstore,
  petstore1,
};

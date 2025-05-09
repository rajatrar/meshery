import { PureAbility } from '@casl/ability';
import { createCanShow } from '@layer5/sistent';
import _ from 'lodash';
import { CapabilitiesRegistry } from './disabledComponents';
import { store } from '../store';
import { mesheryEventBus } from './eventBus';

export const ability = new PureAbility([]);

export default function CAN(action, subject) {
  return ability.can(action, _.lowerCase(subject));
}

const useGetCapabilitiesRegistry = () =>
  new CapabilitiesRegistry(store.getState().capabilitiesRegistry);

export const CanShow = createCanShow(useGetCapabilitiesRegistry, CAN, () => mesheryEventBus);

import { ref } from 'vue';

export const globalState = {
  reloadKey: ref(0)
};

export function reload() {
  globalState.reloadKey.value++;
}
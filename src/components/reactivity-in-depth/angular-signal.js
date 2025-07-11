import { shallowRef, computed as _computed } from 'vue'

export function signal(initialValue) {
  const r = shallowRef(initialValue)
  const s = () => r.value
  s.set = value => { r.value = value }
  s.update = updater => { r.value = updater(r.value) }
  return s
}

export function computed(getter) {
  const c = _computed(getter)
  return () => c.value
}
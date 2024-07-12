//
import { create } from 'zustand'
import { GlobalState } from 'md/global_state'

const useStore = create<GlobalState>((set) => ({
  session: null,
  phones: null,
  //
  login: (user) => set((state) => ({ session: user })),
  savePhone: (_phones) => set((state) => ({ phones: _phones })),
}))

export default useStore;
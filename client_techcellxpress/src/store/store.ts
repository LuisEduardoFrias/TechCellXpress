//
import { create } from 'zustand'
import { GlobalState } from 'md/global_state'

const useStore = create<GlobalState>((set) => ({
  session: null,
  //
  login: (user) => set((state) => ({ session: user })),
}))

export default useStore;
import { useState } from "react"


export default function useKeyStates(count, initialState=false) {
  if (typeof initialState !== "boolean")
    throw new Error("Argument 'initialState' must be a boolean.")

  if (count > 0) {
    const key_states = new Array(count)
    const stateArray = useState(initialState)
    key_states[0] = {
      KeyState: stateArray[0],
      setKeyState: stateArray[1]
    }

    for (let i=1; i < key_states.length; i++) {
      const stateArray = useState(false)
      key_states[i] = {
        KeyState: stateArray[0],
        setKeyState: stateArray[1]
      }
    }

    return key_states
  }
  throw new Error("Argument 'count' must be a positive integer.")
}

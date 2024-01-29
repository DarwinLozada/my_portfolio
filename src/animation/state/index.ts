/* eslint-disable no-unused-vars */
export enum Actions {
  TOGGLE_STATE,
  TOGGLE_ANIMATING,
}

export interface State {
  isActive: boolean
  isAnimating: boolean
}

export const initialState: State = {
  isActive: false,
  isAnimating: false,
}

export const TwoStateAnimationReducer = (
  prevState: State,
  action: Actions,
): State => {
  switch (action) {
    case Actions.TOGGLE_STATE:
      return {
        ...prevState,
        isActive: !prevState.isActive,
      }
    case Actions.TOGGLE_ANIMATING:
      return {
        ...prevState,
        isAnimating: !prevState.isAnimating,
      }
  }
}

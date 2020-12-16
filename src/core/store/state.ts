import { MainSectionState } from "../features/MainSection/mainSection.state";

export interface AppState {
  mainState: MainSectionState;
}

export class Action {
  readonly type: string | undefined;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  toJSON(): Record<string, any> {
    return { ...this };
  }
}

export interface ConnectedProps {
  dispatch: (act: Action) => void;
}

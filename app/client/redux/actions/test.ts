import {ActionType, createAction, createReducer} from "typesafe-actions";

const TEST_CONST = {
  counter: {
    INCREASE: 'TEST/INCREASE' as const,
    DECREASE: 'TEST/DECREASE' as const,
  }
}

const OTestActions = {
  counter: {
    increase: createAction( TEST_CONST.counter.INCREASE )(),
    decrease: createAction( TEST_CONST.counter.DECREASE )(),
  }
}

type TestActionType = ActionType< typeof OTestActions >;

export interface ITestActionState {
  counter: number,
}

const ODefaultTestActionState: IDefaultTestActionState = {
  counter: 0,
}

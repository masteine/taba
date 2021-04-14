import { createModel } from "@rematch/core";
import { RootModel } from "../index";
import ICounter from "./interface";
import { timeConterter, timeToString, timeToNumber } from "../../../utils/timeConverter"
import {addTime} from "../../../utils/addTime";

export const counter = createModel<RootModel>()({
    state: {
        setup: [
            { label: "prepare", value: 10 },
            { label: "work", value: 20 },
            { label: "rest", value: 10 },
            { label: "cycles", value: 8 },
            { label: "rounds", value: 1 },
            { label: "rounds rest", value: 20 }
        ],
        time: 240
    }, // initial state
    reducers: {
        // handle state changes with pure functions
        updateState(state, { payload, name }) {
            return {...state, [name]: payload}
        },
        // updateState(state, { name, payload }) {
        //     return { ...state, [name]: payload };
        //   }
    },
    effects: (dispatch) => ({
        // handle state changes with impure functions.
        // use async/await for async actions
        // async incrementAsync(payload: number, state) {
        //     console.log('This is current root state', state);
        //     await new Promise(resolve => setTimeout(resolve, 1000))
        //     dispatch.count.increment(payload)
        // },
        async counterChange(payload: number) {
            dispatch.counter.updateState({ payload, name: "work" })
        },
        async onChangeSetup(payload: ICounter["setup"]) {
            const a = timeToString(65)
            console.log(a)
            dispatch.counter.updateState({ payload, name: "setup" })
        }
    }),
});
import { ADD_SHOWS } from "../constants/actions-types";

export function addShows(payload){
    return {type: ADD_SHOWS, payload}
}
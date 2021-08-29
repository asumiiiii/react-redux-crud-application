import _ from 'lodash';
import { 
    CREATE_EVENTS,
    READ_EVENTS,
    READ_EVENT,
    UPDATE_EVENT,
    DELETE_EVENTS,
} from '../actions'

export default (events = {}, action) => {
    switch (action.type) {
        case CREATE_EVENTS:
        case READ_EVENTS:
        case UPDATE_EVENT:
            return _.mapKeys(action.response.data, 'id')
        case READ_EVENT:
            const data = action.response.data
            return { ...events, [data.id]: data }
        case DELETE_EVENTS:
            delete events[action.id]
            return { ...events }
        default:
            return events
    }
}
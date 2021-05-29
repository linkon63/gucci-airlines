export const showSingleAirlineData = (payload) => {
    return {
        type: 'SHOW_SINGLE_AIRLINE_DATA',
        payload
    }
}
export const addToBookingList = (payload) => {
    return {
        type: 'ADD_TO_BOOKING_LIST',
        payload
    }    
}

export const removeFromBookingList = (payload) => {
    return {
        type: 'REMOVE_FROM_BOOKING_LIST',
        payload
    }
}

export const addToTemporaryBookingList = (payload) => {
    return {
        type: 'ADD_TO_TEMPORARY_BOOKING_LIST',
        payload
    }
}

export const addUserInfo = (payload) => {
    return {
        type: 'ADD_USER_INFO',
        payload
    }
}
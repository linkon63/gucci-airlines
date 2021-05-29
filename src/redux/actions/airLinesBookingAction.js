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
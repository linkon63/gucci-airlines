import airlinesData from '../../FakeData/airlines.json';

const initialValue = {
    airlines: airlinesData,
    airLinesBookingList: [],
    userList: []
}

export const airlinesReducers = (state = initialValue, action) => {
    switch(action.type){
        case 'ADD_TO_BOOKING_LIST': {
            return {
                ...state,
                airLinesBookingList: [...state.airLinesBookingList, action.payload]
            }
        }
        case 'REMOVE_FROM_BOOKING_LIST': {
            return {
                ...state,
                airLinesBookingList: state.airLinesBookingList.filter(b => b.id !== action.payload)
            }
        }
        default: {
            return state
        }
    }
}
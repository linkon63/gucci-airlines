import airlinesData from '../../FakeData/airlines.json';

const initialValue = {
    airlines: airlinesData,
    bookingList: [],
    userList: []
}

export const airlinesReducers = (state = initialValue, action) => {
    switch(action.type){
        case 'ADD_TO_BOOKING_LIST': {
            return {
                ...state,
                bookingList: [...state.bookingList, action.payload]
            }
        }
        case 'REMOVE_FROM_BOOKING_LIST': {
            return {
                ...state,
                bookingList: state.bookingList.filter(b => b.id !== action.payload)
            }
        }
        default: {
            return state
        }
    }
}
import airlinesData from '../../FakeData/airlines.json';

const initialValue = {
    airlines: airlinesData,
    airLinesBookingList: [],
    userList: [],
    singleAirlinesData: [],
    temporaryBookingList: []
}

export const airlinesReducers = (state = initialValue, action) => {
    switch(action.type){
        case 'SHOW_SINGLE_AIRLINE_DATA': {
            return {
                ...state,
                singleAirlinesData: state?.airlines.find(a => a.id === action.payload)
            }
        }
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
        case 'ADD_TO_TEMPORARY_BOOKING_LIST': {
            return {
                ...state,
                temporaryBookingList: [action.payload]
            }
        }
        default: {
            return state
        }
    }
}
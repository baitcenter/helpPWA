const defaultState = {
    user: {}
}

export default function reducer(state = defaultState,
    { type,payload }:{type:string,payload:any}
    ): any {
        switch(type){
            case 'SET_USER_STATE':
                console.log(payload);
                return{
                    ...state,
                    user: {
                        username: payload[0],
                        email: payload[1],
                        photoUrl: payload[2],
                }
        }
    }
        return state

}
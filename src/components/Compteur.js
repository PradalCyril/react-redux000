const Compteur = (state = 0, action) => {
    switch (action.type) {
        case 'ADD':
            return state + 1;
        case 'REMOVE':
            return state - 1;
        case 'REMOVEa':
            return state - 10;
        case 'ADDa':
            return state + 10;
        case 'RESET':
            return state = 0;
        default:
            return state;
    }
}
export default Compteur;
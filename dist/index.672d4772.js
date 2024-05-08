let ReduxState = {
    count: 0,
    name: "vijay"
};
const reduce = (state, action)=>{
    switch(action.type){
        case "increment":
            return {
                ...ReduxState,
                count: state.count + 1
            };
        case "decrement":
            return {
                ...ReduxState,
                count: state.count - 1
            };
        case "bypay":
            return {
                ...ReduxState,
                count: state.count + action.payload
            };
    }
};
console.log(ReduxState);
ReduxState = reduce(ReduxState, {
    type: "increment"
});
console.log(ReduxState);
ReduxState = reduce(ReduxState, {
    type: "decrement"
});
console.log(ReduxState);
ReduxState = reduce(ReduxState, {
    type: "bypay",
    payload: 20
});
console.log(ReduxState);

//# sourceMappingURL=index.672d4772.js.map

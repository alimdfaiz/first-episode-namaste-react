// const heading = React.createElement("h1",{
//     id:"heading",xyz:"abc"
// },
// "Hello World from React");
        // const root = ReactDOM.createRoot(document.getElementById("root"));
//         root.render(heading);


//         <div id="parent">
//             <div id="child">
// <h1>I am a h1 tag</h1>
//             </div>

//         </div>

const parent = React.createElement("div",{
    id:"parent"
}, [React.createElement("div",{
    id:"child1"
},[React.createElement("h1",{},"I am h1 tag"),React.createElement("h2",{},"I am h2 tag"),React.createElement("h3",{},"I am h3 tag"),]),
React.createElement("div",{
    id:"child2"
},[React.createElement("h1",{},"I am h1 tag"),React.createElement("h2",{},"I am h2 tag"),React.createElement("h3",{},"I am h3 tag"),]),
React.createElement("div",{
    id:"child3"
},[React.createElement("h1",{},"I am h1 tag"),React.createElement("h2",{},"I am h2 tag"),React.createElement("h3",{},"I am h3 tag"),]),]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
console.log(parent);

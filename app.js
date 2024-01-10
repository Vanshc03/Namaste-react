const parent = React.createElement("div",{id:"parent"}, 
React.createElement("div",{id:"child"}, 
[React.createElement("h1",{id:"child"},"hi myself namaste react"),
React.createElement("h2",{id:"child2"},"hi myself namaste js")]
));
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);


const iForgotHowToDoThis = React.createElement(
  "h1",
  { id: "trial" },
  "What should this do"
);
const iTriedAFewStuff = React.createElement(
  "p",
  { id: "paragraph" },
  "lets work on this ,.... blah blah"
);
const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [iForgotHowToDoThis, iTriedAFewStuff]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);

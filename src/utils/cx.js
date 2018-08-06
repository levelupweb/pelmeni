export default (defaultStyles, activations) =>
  `${defaultStyles} ${Object.keys(activations).reduce((prev, curr) =>
    `${prev} ${activations[curr] ? curr : ""}`, ""
  )}`;
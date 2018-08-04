export const requireSemanticDependecies = (cb) => {
    require("../../../../../semantic/semantic/dist/components/dropdown");
    require("../../../../../semantic/semantic/dist/components/transition");
    return cb();
}
const language = {
    name: "JS",
    libraries: ["React", "Vue", "Angular"],
};

const copy = { ...language };
const copy2 = _.cloneDeep(language);

console.log(language);
console.log(copy);
console.log(copy2);

copy.libraries.push("NextJS");
console.log(language);
console.log(copy);
console.log(copy);

copy.libraries.push("Svelte");
console.log(language);
console.log(copy);
console.log(copy2);

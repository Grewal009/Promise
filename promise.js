const promise = fetch("https://api.github.com/users/Grewal009");

console.log(promise);

fetch("https://api.githu.com/users/Grewal009").catch(function (error) {
  console.log(error);
});

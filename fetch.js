fetch("https://swapi.dev/api/people/1/")
.then(res => {
    console.log("resolved", res)
    res.json().then(data => console.log("JSON DONE", data));
})
.catch(e => {
    console.log("error!", e)
});
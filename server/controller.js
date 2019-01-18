let savedJokes = [];
let id = 0;

module.exports = {
    // this is the get
    getJoke: (req, res) => {
        console.log(allJokes)
        res.status(200).send(allJokes)
    },
    //this is the post
    addJoke: (req, res) => {
        console.log('this is working')
        console.log(req.body);
        
        req.body.id = id;
        id++;
        savedJokes.push(req.body)
        res.status(200).send(savedJokes)
    },
    //this is the put
    updateJoke: (req, res) => {
        const {id} = req.params;
        const {body} = req;

        
        // jokes = jokes.map((joke) => {
        //     if(joke.id === +id) {
                
        //     }
        // })

    },
    //obviously the delete
    deleteJoke: (req, res) => {

    }
}
let savedJokes = [];
let id = 0;

module.exports = {
    getJoke: (req, res) => {
        res.status(200).send(allJokes)
    },
    //this is the post
    addJoke: (req, res) => {        
        req.body.id = id;
        id++;
        savedJokes.push(req.body)
        res.status(200).send(savedJokes)
    },
    //this is the put
    updateJoke: (req, res) => {
        let {text} = req.body
        const {id} = req.params;
        let updatedJokes = [];
        
         savedJokes.map((joke) => {
            if(joke.id === +id){

                joke.myJokes= text;
                updatedJokes.push(joke)
            }else{
                updatedJokes.push(joke)
            }
        })

        res.status(200).send(updatedJokes)

    },
    //obviously the delete
    deleteJoke: (req, res) => {
            savedJokes = savedJokes.filter((joke) => {
                joke.id !== +req.params.id
                
            })
            res.status(200).send(savedJokes)
        }
    }
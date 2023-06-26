import React, {useState} from "react";

function LetterForm({ addCoverLetterInserts, setSubmitted }) {

    const [name, setName] = useState("")
    const [location, setLocation] = useState("")
    const [position, setPosition] = useState("")

    
    
    

    function handleSubmit(e) {
        e.preventDefault()

        const newInsert = {
            name,
            location,
            position
        }



        addCoverLetterInserts(newInsert)

        setSubmitted(true)

    }

    

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
                <label>Name of Business</label>
                <br></br>

                <input type="text" value={location} onChange={(e) => setLocation(e.target.value)}></input>
                <label>Location</label>
                <br></br>
            
                <input type="text" value={position} onChange={(e) => setPosition(e.target.value)}></input>
                <label>Name of Position</label>
                <br></br>

                <button type="submit">Submit</button>
            
                {/* <input type="submit" value="Submit"></input> */}
            </form>

            
        </div>
    )    
}

export default LetterForm
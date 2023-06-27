import React from "react";

function CoverLetter({ inserts, reviewed}) {

    

    function handleClick() {
        // navigator.clipboard.writeText(text);
    }

    return (
        <div>

            <div className="cover-letter">
                
                <p>Dear Hiring Manager,</p>

                <p>After visiting {inserts.name} in {inserts.location}, I am excited to be considered for the {inserts.position} position, as the staff members I met have exemplified a level of professionalism and friendliness I strive to look for in a work team.</p>

                <p>After roughly 11 years of experience in restaurants, customer service, and overall fast-paced environments, I believe I have the necessary tools and background to join a top-level team at {inserts.name}. My experience consists of high-volume restaurants such as Cinebarre Boulder, serving roughly 20 tables every 2 hours, as well as high-quality fine dining such as Por Wine House, Coohills, and El Five in Colorado.</p>

                <p>I have since worked other positions such as a customer service agent for the Colorado Dept of Labor, and a software engineer for FDM after having moved to New York. At the moment, my goals are to pursue what I have felt best at and that has been restaurant service - I am elated to begin my adventure in the New York City restaurant industry.</p>

                <p>Please see my resume attached, and feel free to contact me at my email or my phone number provided.</p>

                <p>Thank you so much for this opportunity, and I hope to hear from you soon!</p>

                <p>All the best,</p>

                <p>Jeff Thomassen
                <br></br>
                jeffkthomassen@gmail.com
                <br></br>
                303-947-6182</p>
            </div>

            <button onClick={handleClick}>Copy to Clipboard</button>

            {reviewed? <button >Return to Form</button> : null}
        </div>
    )
}

export default CoverLetter;
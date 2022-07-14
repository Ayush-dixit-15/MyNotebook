import React, { useEffect } from 'react'
import { useContext } from 'react'

const About = () => {
   
    
    return (
        <div>
            <p>
            MyNotebook is a single page react application that lets you save your notes into the coud. It, uses the concept of context api for creating a user, saving his notes and fetching them when user is logged in. It also is very secure as it uses the concept of hashing and salt in order to create a hash that would be saved in the database in the place of password. So, if someone even gets into the databse, won't be able to access the notes of that specific user
            </p>
        </div>
    )
}

export default About 
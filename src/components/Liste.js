import React from 'react'

const liste = (props) => {
    return (
        <div className="flex flex-col items-center w-100">

        <button className="p-2 bg-green-500 text-white rounded">Upload pic</button>
        
            <ul className="list-none flex flex-col justify-center items-center mt-5">
                <li>Photo 1</li>
                <li>Photo 2</li>
                <li>Photo 3</li>
            </ul>
        </div>
    )
}

export default liste
import React from 'react'
import Contact from './Contact'



function Contactslist(props) {
    // console.log(props.list)
    return (
        <div className='Contactslist'>
            <div className="title">
                <h1>Contacts</h1>
                {props.list.map(item => <Contact name={item.contactName} number={item.contactNumber} image={item.contactImage}/>)}
            </div>
        </div>
    )
}

export default Contactslist

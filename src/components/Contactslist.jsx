import React from 'react'
import Contact from './Contact'

let contactList = [
    {contactName: 'Abi', num: "555-555-5555", img:'./profile-avatar.jpg'},
    {contactName: 'Joe Dirt', num: "555-???-123?", img:'https://www.looper.com/img/gallery/heres-where-you-can-watch-joe-dirt-2-beautiful-loser/l-intro-1625773202.jpg'},
    {contactName: 'Master Shake', num: "000-000-0001", img:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/905d008d-e774-4f04-8d1b-6aac3ef243c4/d9i6xcd-51dbca35-9f0e-49df-9a5e-2ef47081ece2.png/v1/fill/w_400,h_643,strp/master_shake_by_porygon2z_d9i6xcd-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjQzIiwicGF0aCI6IlwvZlwvOTA1ZDAwOGQtZTc3NC00ZjA0LThkMWItNmFhYzNlZjI0M2M0XC9kOWk2eGNkLTUxZGJjYTM1LTlmMGUtNDlkZi05YTVlLTJlZjQ3MDgxZWNlMi5wbmciLCJ3aWR0aCI6Ijw9NDAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.zJRTm3ErUZtAkffXDWtkLOPvVEZ3ifY19pEDunq0Gi4'},
    {contactName: 'Garmanarnar', num: "gob-gob-gobb", img:'https://i.ytimg.com/vi/dFDlLo0Ua8E/maxresdefault.jpg'}
]

function Contactslist() {
    return (
        <div className='Contactslist'>
            <div className="title">
                <h1>Contacts</h1>
                {contactList.map(info => <Contact name={info.contactName} number={info.num} image={info.img}/>)}
            </div>
        </div>
    )
}

export default Contactslist

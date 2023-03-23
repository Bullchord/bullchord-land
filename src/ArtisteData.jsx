import axios from 'axios'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// import './artists.css'
const ArtisteData = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [twitter, setTwitter] = useState('')
  const [instagram, setInstagram] = useState('')
  const [tiktok, setTiktok] = useState('')
  const notify = () => toast('Form submitted')
  const handleSubmit = (e) => {
    e.preventDefault()
    //  console.log(name,email,phone,twitter,instagram,tiktok)
    const data = {
      Name: name,
      Email: email,
      Phone: phone,
      Twitter: twitter,
      Instagram: instagram,
      Tiktok: tiktok,
    }
    axios
      .post(
        'https://sheet.best/api/sheets/359ed901-a572-445a-9d56-cc9027a4a04f',
        data,
      )
      .then((response) => {
        console.log(response)
        // To clear field
        setName('')
        setEmail('')
        setPhone('')
        setTwitter('')
        setInstagram('')
        setTiktok('')
      })
  }
  return (
    <div className="bul3_form-container">
      <div className="descrip">
        <p>
          Be the first artistes to join <span>Bullchord</span>, mint and sell
          your songs as NFT.
        </p>
      </div>
      <form className="form" action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="Name"
          placeholder="Stage Name"
          required
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="email"
          name="Email"
          placeholder="Email"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="number"
          name="Phone"
          placeholder="Phone"
          required
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
        />
        <input
          type="text"
          name="Twitter"
          placeholder="Twitter link"
          required
          onChange={(e) => setTwitter(e.target.value)}
          value={twitter}
        />
        <input
          type="text"
          name="Instagram"
          placeholder="Instagram link"
          required
          onChange={(e) => setInstagram(e.target.value)}
          value={instagram}
        />
        <input
          type="text"
          name="Tiktok"
          placeholder="Tiktok link"
          onChange={(e) => setTiktok(e.target.value)}
          value={tiktok}
        />
        {email ? (
          <input
            type="submit"
            value="submit"
            className="submit_button"
            onClick={notify}
          />
        ) : (
          <input
            type="submit"
            value="submit"
            className="submit_button"
            disabled
          />
        )}
        <ToastContainer />
      </form>
    </div>
  )
}
export default ArtisteData

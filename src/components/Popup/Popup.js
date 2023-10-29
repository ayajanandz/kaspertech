import { Button, Dialog, DialogContent, DialogTitle } from '@mui/material'
import React from 'react'
import './Popup.css'

function Popup(props) {
    const{title, children, openPopup, setOpenPopup} = props

  return (
    <Dialog open={openPopup}>
        <DialogTitle>
            <div>New Customer Details</div>
            

        </DialogTitle>
            
        <DialogContent>
            {children}
        </DialogContent>
        <hr/>
        <div className='cancelbtn'>
        <Button variant='outlined' onClick={()=> setOpenPopup(false)}>Cancel</Button>
        </div>
       

    </Dialog>
  )
}

export default Popup
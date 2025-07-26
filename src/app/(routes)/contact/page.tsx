"use client";
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../../rstore'
import { Input } from '@/components/ui/input';
import { setText } from '../../../../rstore/rslice';

const ContactPage = () => {

    const {headerText,footerText} = useSelector((state : RootState) => state.ui)
    const dispatch = useDispatch();

    const handleUpdateChange = (text :string)=> {
        dispatch(setText(text));
    }
  return (
   <div>
    <h1>{headerText}</h1>
    <h1>{footerText}</h1>
    <Input className="mt-4" placeholder="Type your message here..." onChange={(e)=> handleUpdateChange(e.target.value)} />
   </div>
  )
}

export default ContactPage
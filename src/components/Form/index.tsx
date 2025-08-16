'use client'

import { buttonStyles } from "@/styles/button"
import { useState } from "react"

type FormDataType = {
    name: string,
    email: string
}

const Form = () => {
    const [formInput, setFormInput] = useState<FormDataType>({name: "", email: ""})
    const [savedForms, setSavedForms] = useState<FormDataType[]>([])

    const handleSaveForm = (e:React.FormEvent) => {
        e.preventDefault()
        if (!formInput.name.trim() || !formInput.email.trim()) return
        setSavedForms(prev => [...prev, formInput])
        setFormInput({name: "", email: ""})
    }
    
    return(
        <form className="w-5/6 my-20 m-auto p-20 flex items-between justify-center text-white bg-[#2C2C2C] rounded-3xl gap-10 max-xl:w-full max-xl:mx-0 max-[769px]:flex-col max-sm:p-10">
            <div className="w-1/2 max-[769px]:w-full max-[769px]:text-center">
                <p className="text-[14px] text-[#00D1E6]">Email Newsletter</p>
                <h5 className="mt-3 text-7xl max-xl:text-6xl max-sm:text-5xl">Subscribe for updates</h5>
            </div>
            <div className="w-1/2 flex flex-col gap-3 max-[769px]:w-full">
                <label htmlFor="name">
                    <input onChange={(e) => setFormInput({...formInput, name: e.target.value})} 
                            value={formInput.name} 
                            className="w-full p-5 bg-[#191919] rounded" 
                            type="text" id="name" placeholder="Name"/>
                </label>
                <label htmlFor="email">
                    <input onChange={(e) => setFormInput({...formInput, email: e.target.value})} 
                            value={formInput.email} 
                            className="w-full p-5 bg-[#191919] rounded" 
                            type="text" id="email" placeholder="Email"/>
                </label>
                <button onClick={handleSaveForm} className={`${buttonStyles} w-full`}>Submit</button>
            </div>
        </form>
    )
}

export default Form
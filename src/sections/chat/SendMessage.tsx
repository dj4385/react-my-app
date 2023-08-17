import React from 'react'
import InputGroup from '../../components/InputGroup'
import Button from '../../components/Button'
import { ISendMessage } from '../../models/sections/ISendMessage'
import { useForm } from 'react-hook-form'
import { ISendMessageForm } from '../../models/sections/IChatMessages'

const SendMessage = ({sendMessage}: ISendMessage) => {

    const { register, handleSubmit,reset } = useForm<ISendMessageForm>()

    const send = (data: ISendMessageForm) => {
        if(data.message) {
            sendMessage(data.message);
        }
        reset();
    }

    return (
        <div className="bg-primary text-white p-2">
            <form onSubmit={handleSubmit(send)}>
                <div className='flex flex-row gap-[1%]'>
                    <div className="w-[90%] flex items-center justify-center">
                        <InputGroup 
                            inputLabel=''
                            placeholder='Enter Message'
                            other={{
                                ...register("message")
                            }}
                        />
                    </div>
                    <div className="w-[10%] flex items-center justify-center">
                        <Button
                            label='Send'
                            icon=""
                        />
                    </div>
                    
                </div>
            </form>
        </div>
    )
}

export default SendMessage
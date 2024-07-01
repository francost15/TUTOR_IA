"use client"
import { FormEvent, useState, useRef, useEffect, KeyboardEvent } from 'react';
import { IoSend } from 'react-icons/io5';
interface Props {
    onSendMessage: (message: string) => void;
    placeholder?: string;
    disableCorrections?: boolean;
}

export const Inputchat = ({ onSendMessage, placeholder, disableCorrections = false }: Props) => {

    const [message, setMessage] = useState('');
    const inputRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.setCustomValidity('Por favor, introduce un mensaje.');
        }
    }, []);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.setCustomValidity(message.trim().length > 0 ? '' : 'Por favor, introduce un mensaje.');
        }
    }, [message]);

    const handleSendMessage = (event?: FormEvent<HTMLFormElement> | KeyboardEvent<HTMLTextAreaElement>) => {
        if (event) {
            event.preventDefault();
        }

        if (message.trim().length === 0) {
            if (inputRef.current) {
                inputRef.current.reportValidity();
            }
            return;
        }

        onSendMessage(message);
        setMessage('');
    }

    const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            handleSendMessage();
        }
    }

    return (
        <form
            onSubmit={handleSendMessage}
            className="flex h-full px-12 my-3"
        >
            <div className="flex-grow relative mt-auto">
                <textarea
                    name="message"
                    ref={inputRef}
                    className="flex w-full rounded-xl text-black focus:outline-none border-2 focus:border-gray-900 border-gray-400 pl-4 pr-10 py-3 resize-none overflow-y-auto custom-scrollbar"
                    placeholder={placeholder}
                    autoComplete={disableCorrections ? 'on' : 'off'}
                    autoCorrect={disableCorrections ? 'on' : 'off'}
                    spellCheck={disableCorrections ? 'true' : 'false'}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                    rows={1}
                    autoFocus
                    required
                />
                    <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
                    <IoSend size={25} className='text-gray-800'/>
                    </button>
            </div>
        </form>
    );
};

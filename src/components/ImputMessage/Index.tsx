import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import { useState } from 'react';

export default function InputMessage() {

    const [showEmoji, setShowEmoji] = useState(false);
    const [text, setText] = useState("");

    const handleEmoji = () => {
        showEmoji ? setShowEmoji(false) : setShowEmoji(true);
    }

    const addEmoji = (emoji: any) => {
       setText((prevMessage) => prevMessage + emoji.native)
    }
    return (
        <>
            <label className="block mb-2 text-sm font-medium pt-4 ">Mensagem a ser enviada</label>
            <div className="w-full mb-4 border rounded-lg bg-gray-50 relative ">
                <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800 ">
                    <label className="sr-only">Sua Mensagem</label>
                    <textarea value={text} onChange={(e) => setText(e.target.value)} id="comment" rows="10" className="w-full p-4 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400 " placeholder="Escreva uma mensagem..." required></textarea>
                    <button type="button" onClick={handleEmoji} className="p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.408 7.5h.01m-6.876 0h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM4.6 11a5.5 5.5 0 0 0 10.81 0H4.6Z" />
                        </svg>
                        <span className="sr-only">Add emoji</span>
                    </button>
                    <div className="absolute bottom-15 left-0">
                        {
                            showEmoji && (
                                <Picker data={data} onEmojiSelect={addEmoji} />
                            )
                        }
                    </div>
                </div>
            </div>

        </>
    );
}
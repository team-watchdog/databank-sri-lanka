import { FunctionComponent, useState, useEffect, ReactNode } from 'react';
import { Dialog } from '@headlessui/react';
import { FiX } from "react-icons/fi";

interface ModalProps{
    open: boolean;
    title: string;
    onClose: () => void;
    children: ReactNode | ReactNode[];
}

const Modal: FunctionComponent<ModalProps> = (props) => {
    const {title,  open, onClose, children } = props;
    const [ isOpen, setIsOpen ] = useState(open);

    useEffect(() => {
        setIsOpen(open);
    }, [ open ]);

    const closeDialog = () => {
        setIsOpen(false);
        onClose();
    }
    
    return (
        <Dialog 
            open={isOpen} 
            onClose={closeDialog}
            as="div" className="fixed z-10 bg-black h-full w-full flex justify-center items-center bg-opacity-60 top-0"
        >
            <Dialog.Panel 
                className=" max-h-[95vh] overflow-y-scroll w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
            >
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-bold leading-6 text-gray-900 flex justify-between"
                  >
                    {title}
                    <a href="" onClick={(e) => {
                        closeDialog();
                        e.preventDefault();
                    }}><FiX /></a>
                  </Dialog.Title>
                  <div className="mt-2 pt-2">
                    {children}
                  </div>
                </Dialog.Panel>
        </Dialog>
    )
}

export default Modal;
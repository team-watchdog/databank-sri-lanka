import { FunctionComponent, ReactNode } from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid';

interface ToggleAreaProps{
    title: string | ReactNode;
    subtitle?: string | ReactNode;
    children?: ReactNode | ReactNode[];
}

export const ToggleArea: FunctionComponent<ToggleAreaProps> = (props) => {
    const { title, subtitle, children } = props;

    return (
        <div className="border-b">
            <Disclosure>
            {({ open }: { open: boolean }) => (
                <>
                <Disclosure.Button className="flex w-full py-2 gap-2 justify-between">
                    <div className="flex justify-start flex-col text-left">
                        <h6 className="text-md font-semibold">{title}</h6>
                        {subtitle ? <div>{subtitle}</div> : null}
                    </div>
                    <ChevronUpIcon
                        className={`${
                            open ? 'rotate-180 transform' : ''
                        } h-8 w-8 text-slate-900`}
                    />
                </Disclosure.Button>
                <Disclosure.Panel className="pt-1 pb-4 text-gray-500">
                    {children ?  children : null}
                </Disclosure.Panel>
                </>
            )}
            </Disclosure>
        </div>
    )
}

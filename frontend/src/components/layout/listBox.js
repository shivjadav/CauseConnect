import React, { Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { FaCheck } from "react-icons/fa6";
import { RiExpandUpDownLine } from "react-icons/ri";

export default function ListBox(props) {
    const obj = props.options;

    return (
        <div className="top-16 w-full">
            <Listbox
                value={props.selected}
                onChange={(value) => {
                    props.setSelected(value);
                    console.log("Selected city:", value.name); // Log the selected city to the console
                }}
            >
                <div className="mt-1">
                    <Listbox.Button className="relative w-full cursor-default rounded-lg bg-red py-2 pl-3 pr-10 text-left border focus:outline-1
                    focus:border-2 focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-indigo-300 sm:text-sm flex justify-between items-center">
                        <span className="block truncate">{props.selected.name}</span>
                        <RiExpandUpDownLine
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true" />
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className="relative mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                            {obj.map((person, personIdx) => (
                                <Listbox.Option
                                    key={personIdx}
                                    className={({ active }) =>
                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-indigo-100 text-indigo-900' : 'text-gray-900'
                                        } flex justify-between items-center`
                                    }
                                    value={person}
                                >
                                    {({ selected }) => (
                                        <>
                                            <span
                                                className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                    }`}
                                            >
                                                {person.name}
                                            </span>
                                            {selected && (
                                                <FaCheck className="h-5 w-5 text-indigo-600" aria-hidden="true" />
                                            )}
                                        </>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>
    );
}

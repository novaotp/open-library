
"use client";

import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import { useRef } from 'react';

export const Filter = () => {
  const filtersRef = useRef<HTMLDialogElement>(null);

  const showOptions = () => {
    if (!filtersRef.current) return;

    filtersRef.current.showModal();
  }

  const closeOptions = () => {
    if (!filtersRef.current) return;

    filtersRef.current.close();
  }

  return (
    <>
      <button
        onClick={showOptions}
        className="relative h-full w-[calc(50%-10px)] bg-orange-400 rounded-t-md rounded-bl-md rounded-br-md flex justify-between items-center p-[15px]"
      >
        <TuneRoundedIcon className="relative h-full w-[30px]" />
        <span className="relative h-full flex-grow pl-[15px]">Options</span>
      </button>
      <dialog
        ref={filtersRef}
        className="fixed w-4/5 p-5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        hello
        <button onClick={closeOptions}>close</button>
      </dialog>
    </>
  )
}

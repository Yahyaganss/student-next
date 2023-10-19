import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <div className="flex flex-row w-full h-full bg-white rounded-[12px] border py-2 px-4 items-center mt-4 justify-between">
        <div className="w-[48px] h-[48px] bg-white shadow-lg rounded-full p-2 overflow-hidden">
          <BsFillPersonFill className="w-full h-full text-slate-600" />
        </div>
        <form action="" className="w-full p-4">
          <input
            type="text"
            name="q"
            className="w-full border h-10 p-6 rounded-full text-[12px] hover:bg-body cursor-pointer"
            placeholder="Apa yang anda pikirkan, Yahya?"
            onClick={openModal}
          />
        </form>
        <div
          className="w-max hover:bg-body p-2 rounded-full"
          onClick={openModal}
        >
          <AiOutlinePlus size="24" className="cursor-pointer" />
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          open={isOpen}
          onClose={setIsOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-[400ms]"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-[400ms]"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-[400ms]"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-[400ms]"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Payment successful
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Your payment has been successfully submitted. We’ve sent
                      you an email with all of the details of your order.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

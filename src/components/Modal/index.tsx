import React, { ReactNode } from "react";
import { Dialog } from "primereact/dialog";

type ModalProps = {
  visible: boolean;
  closeModal: () => void;
  className?: string;
  children: ReactNode;
  size?: "small" | "medium" | "large" | "extra-large";
  closable?: boolean;
};

const sizeClassMap: Record<NonNullable<ModalProps["size"]>, string> = {
  small: "lg:max-w-md",
  medium: "lg:max-w-lg",
  large: "lg:max-w-2xl",
  "extra-large": "lg:max-w-4xl",
};

const Modal: React.FC<ModalProps> = ({
  visible,
  closeModal,
  children,
  size = "medium",
  className = "",
  closable = false,
}) => {
  return (
    <Dialog
      header={null}
      footer={null}
      visible={visible}
      modal
      draggable={false}
      onHide={closeModal}
      closeOnEscape
      position="center"
      closable={closable}
      resizable={false}
      content={() => (
        <div className="flex flex-col px-4 py-5 overflow-y-scroll no-scrollbar bg-white sm:rounded-[1.688rem] sm:h-full">
          {/* Close Button */}
          <div className="flex w-full justify-end">
            <button
              type="button"
              onClick={closeModal}
              className="border border-[#182230] cursor-pointer rounded-full p-4 w-[32px] h-[32px] flex items-center justify-center"
              aria-label="Close"
            >
              <span className="pi pi-times"></span>
            </button>
          </div>
          {/* Modal Content */}
          {children}
        </div>
      )}
      className={`w-11/12 md:max-w-md mx-auto relative ${sizeClassMap[size]} ${className}`}
      breakpoints={{ "960px": "70vw", "640px": "90vw" }}
    />
  );
};

export default Modal;

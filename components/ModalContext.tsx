import React, { createContext, useContext, useState } from "react";

type modalContextType = {
  visible: boolean;
};

const modalContextDefaultValues: modalContextType = {
  visible: false,
};

const ModalContext = createContext<modalContextType>(modalContextDefaultValues);

export function useModal() {
  return useContext(ModalContext);
}

type Props = {
  children: React.ReactNode;
};

export function ModalProvider({ children }: Props) {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  return <ModalContext.Provider value={modalContextDefaultValues}>{children}</ModalContext.Provider>;
}

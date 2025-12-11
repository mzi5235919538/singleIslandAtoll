'use client';

import { ReactNode, createContext, useContext, useState } from 'react';
import BookingModal from './BookingModal';

interface ModalContextType {
  isOpen: boolean;
  listing?: string;
  openBookingModal: (listing?: string) => void;
  closeBookingModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function BookingModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [listing, setListing] = useState<string | undefined>();

  const openBookingModal = (listingName?: string) => {
    setListing(listingName);
    setIsOpen(true);
  };

  const closeBookingModal = () => {
    setIsOpen(false);
    setTimeout(() => setListing(undefined), 300); // Clear after animation
  };

  return (
    <ModalContext.Provider value={{ isOpen, listing, openBookingModal, closeBookingModal }}>
      {children}
      <BookingModal />
    </ModalContext.Provider>
  );
}

export function useBookingModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useBookingModal must be used within BookingModalProvider');
  }
  return context;
}

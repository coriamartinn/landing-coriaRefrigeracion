import { createContext, useCallback, useContext, useMemo, useState } from "react";
import WhatsAppPickerModal from "./WhatsAppPickerModal";

const WhatsAppPickerContext = createContext(null);

export function WhatsAppPickerProvider({ children }) {
  const [message, setMessage] = useState(null);

  // Cualquier componente puede llamar a openPicker("mensaje...") para abrir
  // el selector de contactos con ese mensaje precargado.
  const openPicker = useCallback((msg) => {
    setMessage(msg);
  }, []);

  const closePicker = useCallback(() => {
    setMessage(null);
  }, []);

  const value = useMemo(() => ({ openPicker }), [openPicker]);

  return (
    <WhatsAppPickerContext.Provider value={value}>
      {children}
      <WhatsAppPickerModal
        open={message !== null}
        message={message}
        onClose={closePicker}
      />
    </WhatsAppPickerContext.Provider>
  );
}

export function useWhatsAppPicker() {
  const ctx = useContext(WhatsAppPickerContext);
  if (!ctx) {
    throw new Error(
      "useWhatsAppPicker debe usarse dentro de <WhatsAppPickerProvider>"
    );
  }
  return ctx;
}

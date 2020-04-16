import { createContext } from "react";
import { AnyARecord } from "dns";

interface ContextProps {
  lightOn: boolean;
  switch?: () => any;
}

export default createContext<ContextProps>({
  lightOn: true,
});

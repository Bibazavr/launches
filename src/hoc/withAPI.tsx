import * as React from "react";
import API from "../API";

export const APIContext = React.createContext<typeof API>(API);

interface APIProp {
  API: typeof API;
}

export const withAPI = <P extends APIProp, R = Omit<P, "API">>(
  Element: React.FunctionComponent<P>
): React.FunctionComponent<R> | React.ComponentClass<R> => {
  const wrapper = (props: R) => {
    return (
      <APIContext.Consumer>
        {(value) => (
          // @ts-ignore
          <Element {...props} API={value} />
        )}
      </APIContext.Consumer>
    );
  };
  wrapper.displayName = `WithAPI<${Element.displayName}>`;

  return wrapper;
};

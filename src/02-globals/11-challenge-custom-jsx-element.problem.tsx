import React from "react";

/**
 * How do we add a new base element to React's JSX?
 *
 * You'll need to do some detective work: check
 * out JSX.IntrinsicElements.
 */

declare global {
  namespace JSX {
    interface IntrinsicElements {
      // 🐨 add a new element here
      "custom-element": {}
    }
  }
}

const element = <custom-element>hello world</custom-element>;

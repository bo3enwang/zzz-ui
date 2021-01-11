import React from "react";
interface CapsuleProps {
    children?: React.ReactNode;
    type?: "default" | "round" | "radius";
}
declare const Capsule: ({ children, type }: CapsuleProps) => JSX.Element;
export default Capsule;

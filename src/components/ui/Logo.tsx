import React from "react";
import Image from "next/image";

export const Logo: React.FC<{ className?: string }> = ({
  className = "h-10 w-10",
}) => {
  return (
    <Image
      src="/logo.svg"
      alt="Logo"
      width={40}
      height={40}
      className={className}
      priority
    />
  );
};

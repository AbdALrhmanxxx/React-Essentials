import React from 'react'

export default function Tabs({children,buttons,ButtonsContiner}) {
  return (
    <>
      <ButtonsContiner>{buttons}</ButtonsContiner>
      {children}
    </>
  );
}

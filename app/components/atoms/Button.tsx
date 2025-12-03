import React from 'react'

interface buttonProps {
    label:string,
    action: () => void,
    claseNameButton: string,
    classNameSpan?:string
}

export const Button = ({label, action, claseNameButton, classNameSpan}: buttonProps) => {
  return (
    <button 
    className={claseNameButton}
    onClick={action}>
        <span className={classNameSpan}>{label}</span>
    </button>
  )
}

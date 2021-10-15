import React, { useRef } from 'react'

const Checkbox = props => {
    const inputRef = useRef(null)
    const onChange = () => {
        if (props.onChange) {
            props.onChange(inputRef.current)
        }
    }
    return (
        <div className="custom-checkbox">
            <input type="checkbox" ref={inputRef} onChange={onChange} checked={props.checked} />
            <span className="checkbox-margin">{props.label}</span>
        </div>
    )
}

export default Checkbox

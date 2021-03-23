import React from 'react'

export default function InputText(props) {
    const field =props.field
    return (
        <div className="inputfield">
        {field.icon}
        <input
          type={field.type}
          name={field.name}
          placeholder={field.placeholder}
          className="input"
          value={field.value}
          onChange={e=>field.onChange(e.target.value)}
        />
      </div>
    )
}

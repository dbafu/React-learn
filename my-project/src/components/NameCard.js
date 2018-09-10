import React from 'react'


const NameCard = (props) => {
  const { name, number, isHuman, tags } = props
  return (
    <div className="alert alert-success">
    <h4 className="alert-heading">{name}</h4>
    <ul>
    <li>电话 : {number}</li>
    <li>{isHuman ? '人类' : '外星生物'}</li>
    </ul>
    <hr />
    <p>
    {
      tags.map((tag, index) => (
        <span className="badge badge-pill badge-primary" key={index}>{tag}</span>
      ))
    }
    </p>
    </div>
  )
}


export default NameCard;

import React from 'react'
import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'

export const View = ({axies, deleteAxie}) => {
    return axies.map(axie=>(
        <tr key={axie.name}>
            <td>{axie.name}</td>
            <td>{axie.type}</td>
            <td>{axie.color}</td>
            <td>{axie.price}</td>
            <td className='delete-btn' onClick={()=>deleteAxie(axie.name)}>
                <Icon icon={trash}/>
            </td>
        </tr>
    ))
}
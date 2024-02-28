import React from 'react'
import { pageLinks } from '@/data'

const PageLinks = ({parentClass, itemClass}) => {
  return (
    <ul className={parentClass} id={itemClass}>
          {pageLinks.map((link) => {
            return (
              <li key={link.id}>
                <a href={link} className={itemClass}>
                  {" "}
                  {link.text}{" "}
                </a>
              </li>
            );
          })}
        </ul>
  )
}

export default PageLinks
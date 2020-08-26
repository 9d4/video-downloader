import React from 'react'
import { site as data } from '../../Data/site'

import {DownloadIcon} from '@primer/octicons-react'

const octicons = require('@primer/octicons')

// icon list
const iconDownload = octicons['download'].toSVG()

export default class AppBar extends React.Component {
    render() {
        return (
            <nav className='navbar'>
                <a className='navbar-brand font-weight-bold'>
                    <span dangerouslySetInnerHTML={{__html: iconDownload}}></span>
                    {data['siteName']}
                </a>
            </nav>
        )
    }
}
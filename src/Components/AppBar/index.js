import React from 'react'
import { site as data } from '../../Data/site'
import {DownloadIcon} from '@primer/octicons-react'

export default class AppBar extends React.Component {
    render() {
        return (
            <nav className='navbar'>
                <a className='navbar-brand text-dark font-weight-bold d-flex align-items-center'>
                    <DownloadIcon aria-label='Download icon' size='medium' />
                    &nbsp;
                    {data['siteName']}
                </a>
            </nav>
        )
    }
}
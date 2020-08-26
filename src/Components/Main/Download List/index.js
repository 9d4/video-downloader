import React from 'react'
import { en as lang } from '../../../Data/Languages/en'

export default class DownloadList extends React.Component {
    render() {
        return (
            <div className='card'>
                <div className='card-header'>
                    <span className='card-text font-weight-bolder'>{lang['donwload-section-title']}</span>
                </div>
            </div>
        )
    }
}
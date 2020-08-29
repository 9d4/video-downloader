import React from 'react'
import { en as lang } from '../../../Data/Languages/en'

export default class DownloadItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='col my-2 justify-content-center'>
                <iframe
                    style={{ width: '100%', height: '60px', border: 0, overflow: 'hidden' }}
                    scrolling="no"
                    src={`https://loader.to/api/button/?url=${this.props.url}&f=${this.props.format.toLowerCase()}`}
                ></iframe>
                <br />
                <button
                    className='btn btn-sm btn-block btn-danger button-delete-item'
                    onClick={this.props.handleDelete.bind(this, this.props.id)}
                >
                    {lang['delete-button']}
                </button>
            </div>
        )
    }
}
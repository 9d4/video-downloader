import React from 'react'
import { en as lang } from '../../../Data/Languages/en'

import DeleteModal from './DeleteModal'

export default class DownloadItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='col my-2 justify-content-center'>
                <DeleteModal
                    id={this.props.id}
                    url={this.props.url}
                    format={this.props.format}
                    handleDelete={this.props.handleDelete}
                />
                <iframe
                    style={{ width: '100%', height: '60px', border: 0, overflow: 'hidden' }}
                    scrolling='no'
                    src={`https://loader.to/api/button/?url=${this.props.url}&f=${this.props.format.toLowerCase()}`}
                ></iframe>
                <br />
                <button
                    className='btn btn-sm btn-block btn-danger button-delete-item'
                    // onClick={this.props.handleDelete.bind(this, this.props.id)}
                    data-toggle='modal'
                    data-target={`#dialog-delete-button-${this.props.id}`}
                    onClick={this.onModalShow}
                >
                    {lang['delete-button']}
                </button>
            </div>
        )
    }
}
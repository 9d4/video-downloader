import React from 'react'
import { en as lang } from '../../../Data/Languages/en'

import DeleteModal from './DeleteModal'

export default class DownloadItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            deleteDialogElement: ''
        }

        this.handleDelete = this.handleDelete.bind(this)
        this.handleDialogDismiss = this.handleDialogDismiss.bind(this)
    }

    handleDelete(e) {
        this.setState({
            deleteDialogElement:
                <DeleteModal
                    id={this.props.id}
                    url={this.props.url}
                    format={this.props.format}
                    handledelete={this.props.handleDelete}
                    handledismiss={this.handleDialogDismiss}
                />
        })
    }

    handleDialogDismiss(e){
        this.setState({
            deleteDialogElement: ''
        })
    }

    render() {
        return (
            <div className='col my-2 justify-content-center'>
                {this.state.deleteDialogElement}
                <iframe
                    style={{ width: '100%', height: '60px', border: 0, overflow: 'hidden' }}
                    scrolling='no'
                    src={`https://loader.to/api/button/?url=${this.props.url}&f=${this.props.format.toLowerCase()}`}
                ></iframe>
                <br />
                <button
                    className='btn btn-sm btn-block btn-danger button-delete-item'
                    // onClick={this.props.handleDelete.bind(this, this.props.id)}
                    onClick={this.handleDelete}
                >
                    {lang['delete-button']}
                </button>
            </div>
        )
    }
}
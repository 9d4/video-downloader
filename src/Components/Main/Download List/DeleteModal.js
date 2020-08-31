import React from 'react'
import { en as lang } from '../../../Data/Languages/en'

export default class DeleteModal extends React.Component {  
    componentDidMount(){
        $(`#dialog-delete-button-${this.props.id}`).modal('show')
    }

    render() {
        return (
            <div>
                <div
                    className='modal fade'
                    id={`dialog-delete-button-${this.props.id}`}
                    tabIndex='-1'
                    aria-labelledby={`dialog-delete-button-${this.props.id}`}
                    aria-hidden='true'
                    data-backdrop='static'
                    data-keyboard='false'
                >
                    <div className='modal-dialog modal-dialog-centered'>
                        <div className='modal-content'>
                            <div className='modal-header'>
                                <h5 className='modal-title'>{lang['delete-button']}</h5>
                                <button
                                    type='button'
                                    className='close'
                                    data-dismiss='modal'
                                    aria-label='Close'
                                    onClick={this.props.handledismiss}
                                >
                                    <span aria-hidden='true'>&times;</span>
                                </button>
                            </div>

                            <div className='modal-body'>
                                <form className='form-row'>
                                    <div className='form-group col-12 col-md-6'>
                                        <label htmlFor='urlBoxDelete'>{lang['form-url-input']}</label>
                                        <input
                                            className='form-control form-control-sm'
                                            id='urlBoxDelete'
                                            value={this.props.url}
                                            disabled={true} ></input>
                                    </div>
                                    <div className='form-group col-12 col-md-6'>
                                        <label htmlFor='formatBoxDelete'>{lang['format']}</label>
                                        <input
                                            className='form-control form-control-sm'
                                            id='formatBoxDelete'
                                            value={this.props.format}
                                            disabled={true} ></input>
                                    </div>
                                </form>
                            </div>

                            <div className='modal-footer'>
                                <button
                                    type='button'
                                    className='btn btn-sm btn-secondary'
                                    data-dismiss='modal'
                                    onClick={this.props.handledismiss}
                                >
                                    {lang['cancel']}
                                </button>
                                <button
                                    id='delete-yes'
                                    type='button'
                                    className='btn btn-sm btn-danger'
                                    data-dismiss='modal'
                                    onClick={this.props.handledelete.bind(this, this.props.id)}
                                >
                                    {lang['delete-button']}
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
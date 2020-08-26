import React from 'react'
import { en, en as lang } from '../../Data/Languages/en'
import DownloadList from './Download List'

export default class FormInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            url: '',
            format: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange(event) {
        const target = event.target
        
        if (target.type == 'url') {
            this.setState(_ => (
                {
                    url: target.value
                }
            ))
        } else {
            this.setState(_ => (
                {
                    format: target.value
                }
            ))
        }
    }

    render() {
        return (
            <div className='card bg-light' id='formInputData'>
                <div className='card-header'>
                    <span className='card-text font-weight-bolder'>{lang['input-form-data']}</span>
                </div>
                <div className='card-body'>
                    <form className=''>
                        <div className='form-row'>
                            <div className='form-group col-12 col-md-6'>
                                <label htmlFor='urlBox'>{lang['form-url-input']}</label>
                                <input
                                    className='form-control form-control-sm'
                                    type='url'
                                    id='urlBox'
                                    placeholder='https://www.youtube.com/watch?v=ScMzIvxBSi4'
                                    name='url'
                                    onChange={this.handleInputChange} 
                                    value={this.state.url}
                                    />
                                <small className='form-text text-muted'>{en['form-url-input-hint']}</small>
                            </div>
                            <div className='form-group col-12 col-md-6'>
                                <label htmlFor='formatBox'>{lang['form-format-input']}</label>
                                <select
                                    className='form-control form-control-sm'
                                    id='formatBox'
                                    value={this.state.format}
                                    onChange={this.handleInputChange}
                                    >
                                    <option value='MP3'>MP3</option>
                                    <option value='M4A'>M4A</option>
                                    <option value='MP4'>MP4</option>
                                    <option value='360p'>360p</option>
                                    <option value='480p'>480p</option>
                                    <option value='720p'>720p</option>
                                    <option value='1080p'>1080p</option>
                                    <option value='4k'>4k</option>
                                    <option value='8k'>8k</option>
                                </select>
                            </div>
                        </div>
                        <div className='d-flex justify-content-end'>
                            <button className='btn btn-sm bg-primary text-light ml-auto' type='button'>{lang['form-submit-button']}</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
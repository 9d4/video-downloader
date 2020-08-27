import React from 'react'
import { en, en as lang } from '../../Data/Languages/en'

export default class FormInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            url: '',
            format: 'MP3',
            urlCorrect: true
        }

        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInputChange(event) {
        const target = event.target
        this.setState({
            [target.name]: target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        const target = event.target

        if (this.state.url === '' || !validURL(this.state.url)) {
            this.setState(prevState => (
                {
                    urlCorrect: false
                }
            ))
        } else if (validURL(this.state.url)) {
            this.setState(prevState => (
                {
                    urlCorrect: true
                }
            ))
        }

        //  PASS THE DATA TO MAIN
        const createButton = this.props.handleCreateButton
        createButton()
        //  END

        function validURL(str) {
            var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
                '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
                '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
                '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
                '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
                '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
            return !!pattern.test(str);
        }
    }

    render() {
        return (
            <div className='card bg-light' id='formInputData'>
                <div className='card-header'>
                    <span className='card-text font-weight-bolder'>{lang['input-form-data']}</span>
                </div>
                <div className='card-body'>
                    <form className='' onSubmit={this.handleSubmit}>
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
                                    name='format'
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
                        <small className={this.state.urlCorrect ? 'form-text text-danger d-none' : 'form-text text-danger'} id='hintWrongUrl'>{en['blank-url-hint']}</small>
                        <div className='d-flex justify-content-end'>
                            <button className='btn btn-sm bg-primary text-light ml-auto' type='submit'>{lang['form-submit-button']}</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
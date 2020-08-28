import React from 'react'

export default class DownloadItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='col my-2 d-flex justify-content-center'>
                <iframe
                    style={{ width: '230px', height: '60px', border: 0, overflow: 'hidden' }}
                    scrolling="no"
                    src={`https://loader.to/api/button/?url=${this.props.url}&f=${this.props.format.toLowerCase()}`}
                ></iframe>
            </div>
        )
    }
}
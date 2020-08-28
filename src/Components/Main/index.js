import React from 'react'
import FormInput from './FormInput'
import DownloadList from './Download List'


export default class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isAnyButton: false,
            videoList: [],
        }
        this.handleCreateButton = this.handleCreateButton.bind(this)
    }

    handleCreateButton(video) {
        let current = this.state.videoList
        current.push(video)

        this.setState(prevState => {
            return {
                isAnyButton: true,
                videoList: current,
            }
        })
    }

    render() {
        return (
            <div className='container my-2'>
                <FormInput handleCreateButton={this.handleCreateButton} />
                {/* <iframe style={{width:'230px',height:'60px',border:0,overflow:'hidden'}} scrolling="no" src="https://www.youtube.com/playlist?list=PLJdqTtDuaUsGN6FsGJSf6XtzhRT7wI9JK"></iframe> */}
                <div className='mb-3'></div>
                {this.state.isAnyButton ? <DownloadList videoList={this.state.videoList} videoCount={this.state.videoCount} /> : null}
            </div>
        )
    }
}
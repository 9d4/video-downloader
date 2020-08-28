import React from 'react'
import { en as lang } from '../../../Data/Languages/en'
import DownloadItem from './DownloadItem'

export default class DownloadList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            videoList: [],
            prevProps: {}
        }
    }

    componentDidMount() {
        console.log('mounted')
        let tmp = [...this.props.videoList]
        // tmp.push(this.props.videoList[0])

        this.setState((prevstate) => (
            {
                videoList: tmp,
                prevProps: this.props
            }
        ))
    }

    componentDidUpdate() {
        if (this.state.prevProps === this.props) {
            return null
        }

        let stateVideos = this.state.videoList
        let updatedVideos

        console.log('f: didUpdate()\n', 'props->', this.props.videoList, '\nstate->', this.state.videoList)

        const lastVideo = this.props.videoList[this.props.videoList.length - 1]
        const stateVideoIndex = (this.props.videoList.length - 1) - 1

        test()
        function test() {
            if (stateVideos[stateVideoIndex] !== undefined) {
                let current = stateVideos[stateVideoIndex]

                if (current.url === lastVideo.url) {
                    if (current.format !== lastVideo.format) {
                        updateVideos()
                    }
                } else {
                    updateVideos()
                }
            } else {
                updateVideos()
            }
        }

        function updateVideos() {
            updatedVideos =
            {
                url: lastVideo.url,
                format: lastVideo.format,
                id: lastVideo.id
            }
        }

        this.setState(prevState => {
            let tmp = prevState.videoList
            tmp.push(updatedVideos)
            return {
                videoList: tmp,
                prevProps: this.props
            }
        })
    }

    render() {
        console.log('f: render()\n', 'props->', this.props.videoList, '\nstate->', this.state.videoList)

        const items = this.state.videoList.map((item) => <DownloadItem key={item.id} url={item.url} format={item.format} />)

        return (
            <div className={this.props.className}>
                <div className='card'>
                    <div className='card-header'>
                        <span className='card-text font-weight-bolder'>{lang['donwload-section-title']}</span>
                    </div>
                    <div className='card-body'>
                        <div className='row'>
                            {items}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
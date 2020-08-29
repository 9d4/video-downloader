import React from 'react'
import { en, en as lang } from '../../../Data/Languages/en'
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
        let tmp = [...this.props.videoList]

        this.setState((prevstate) => (
            {
                videoList: tmp,
                prevProps: this.props
            }
        ))
    }

    componentDidUpdate() {
        if (this.state.prevProps == this.props) {
            return null
        }

        this.setState((prevstate) => (
            {
                videoList: this.props.videoList,
                prevProps: this.props
            }
        ))
    }

    render() {
        console.log('f: render()\n', 'props->', this.props.videoList, '\nstate->', this.state.videoList)

        const items = this.state.videoList.map(item => <DownloadItem key={item.id} url={item.url} format={item.format} />)

        return (
            <div className={this.props.className}>
                <div className='card fade show'>
                    <div className='card-header'>
                        <span className='card-text font-weight-bolder'>{lang['donwload-section-title']}</span>
                    </div>
                    <div className='card-body'>
                        <div className='alert alert-info alert-dismissible fade show' data-dismiss="alert">
                            <p className='alert-text m-0 text-justify'>
                                {en['download-hint']}
                            </p>
                            <button
                                type="button"
                                class="close"
                                data-dismiss="alert"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <div className='row'>
                            {items}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
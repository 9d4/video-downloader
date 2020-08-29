import React from 'react'
import { en, en as lang } from '../../../Data/Languages/en'
import DownloadItem from './DownloadItem'

export default class DownloadList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            videoList: [],
            prevProps: {},
            deletedList: []
        }
    
        this.handleDelete = this.handleDelete.bind(this)
    }

    componentDidMount() {
        this.setState((prevstate) => (
            {
                videoList: this.props.videoList,
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

    handleDelete(id) {
        let updatedDeletedList = this.state.deletedList
        updatedDeletedList.push(id)
        console.log(updatedDeletedList)

        this.setState(prevState => ({
            deletedList: updatedDeletedList ,
        }))
    }

    render() {
        const deletedVideoList = this.state.deletedList

        const items = this.state.videoList.map(item => (
            deletedVideoList.includes(item.id) ?
                null
                :
                < DownloadItem
                    handleDelete={this.handleDelete}
                    key={item.id}
                    id={item.id}
                    url={item.url}
                    format={item.format}
                />
        ))

        return (
            <div className={this.props.className}>
                <div className='card fade show'>
                    <div className='card-header'>
                        <span className='card-text font-weight-bolder'>{lang['donwload-section-title']}</span>
                    </div>
                    <div className='card-body'>
                        <div className='alert alert-info alert-dismissible fade show'
                            data-dismiss="alert"
                        >
                            <p className='alert-text m-0 text-justify'>
                                {en['download-hint']}
                            </p>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="alert"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
                            {items}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
import React from 'react'
import { en as lang } from '../../../Data/Languages/en'
import DownloadItem from './DownloadItem'

export default class DownloadList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            videoList: [],
        }
    }

    componentDidMount() {
        console.log('mounted')
        let tmp = [...this.props.videoList]
        // tmp.push(this.props.videoList[0])
        
        this.setState((prevstate) => (
            {
                videoList: tmp
            }
        ))
    }

    componentDidUpdate() {
        // if (this.state.videoList.length === 0){
        //     let tmp = []
        //     tmp.push(this.props.videoList[0])
        //     this.setState((prevstate) => (
        //         {
        //             videoList: tmp
        //         }
        //     ))
        // }
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
import React from 'react'
import FormInput from './FormInput'
import DownloadList from './Download List'


export default class Main extends React.Component {
    render (){
        return (
            <div className='container my-2'>
                <FormInput />
                {/* <iframe style={{width:'230px',height:'60px',border:0,overflow:'hidden'}} scrolling="no" src="https://www.youtube.com/playlist?list=PLJdqTtDuaUsGN6FsGJSf6XtzhRT7wI9JK"></iframe> */}
                <div className='mb-3'></div>
                <DownloadList />
            </div>
        )
    }
}
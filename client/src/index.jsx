import React, {Component, useState, useEffect} from 'react';
import ReactDOM from 'react-dom';

class Index extends Component{
    constructor(){
        super()
        this.state = {
            uuid : 1
        }
        this.uuidUpdateHandler = this.uuidUpdateHandler.bind(this);
    }

    uuidUpdateHandler(e, uuid){
        this.setState({uuid: uuid});
    }

    render(){
        return(
            <>
                {<SearchBar /> ? <SearchBar uuid={this.state.uuid} uuidUpdateHandler={this.uuidUpdateHandler} /> : null}
                {<Reviews /> ? <Reviews uuid={this.state.uuid}/> : null}
                {<Info /> ? <Info uuid={this.state.uuid} /> : null}
                {<Recommendations /> ? <Recommendations uuid={this.state.uuid} uuidUpdateHandler={this.uuidUpdateHandler} /> : null}
            </>
        )
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));
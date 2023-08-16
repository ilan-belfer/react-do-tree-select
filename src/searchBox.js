import React, { Component } from 'react';
import './style/search.css';


class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchVal: props.searchVal
        }
        this.clickSearchIcon = this.clickSearchIcon.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.onInput = this.onInput.bind(this);
    }

    clickSearchIcon() {
        this.props.onSearch(this.state.searchVal);
    }

    onKeyDown(evt) {
        // this.clickSearchIcon();
        // evt.keyCode === 13 && this.clickSearchIcon();
    }

    onInput(e) {
        this.setState({
            searchVal: e.target.value
        });
        // if (e.target.value === '') {
            // }
        this.props.onSearch(e.target.value);
    }

    render() {
        const { defaultProps, searchbox } = this.props;
        const prefixClassName = defaultProps.prefixClassName;
        const placeholder = (searchbox && searchbox.placeholder) || 'Search';
        const _className = `${prefixClassName}-SearchBox`
        const _wrapperClassName = `${prefixClassName}-SearchBox-Wrapper`
        return (
            <div className={_wrapperClassName}>
                <div className={_className}>
                    <input className={`${prefixClassName}-SearchBox-input`} type="text" onInput={this.onInput} onKeyDown={this.onKeyDown} placeholder={placeholder} />
                    {/* <span className={`${prefixClassName}-SearchBox-input-suffix`} onClick={this.clickSearchIcon}>
                        <i className={`${prefixClassName}-icon-search`}></i>
                    </span> */}
                </div>
            </div>
        );
    }
}

export default SearchBox;

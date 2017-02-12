import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class HomePage extends Component {
    constructor() {
        super();
        this.state = { name: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderList = this.renderList.bind(this);
    }
    handleChange(e) {
       this.setState({[e.target.name]: e.target.value})
    }
    handleSubmit(e){
       e.preventDefault();
       this.props.fetchRepos(this.state.name);
    }

    renderList() {
        if(this.props.repos != "") {
            // console.log(this.props.repos.repos);
            const repoList = this.props.repos.repos.map((repo, index) => {
                return (
                    <div className="" key={index}>
                        Repo_Name: {repo.name} <br />
                        Star: { repo.stargazers_count}
                    </div>
                );
            });
            return repoList;
        }
        console.log(this.props.repos.repos);
        return (
            <div>
                Loading
            </div>
        )
    }

    render(){
        return (
            <div>
                <form className="row" style={{marginTop: "80px"}} onSubmit={this.handleSubmit}>
                    <div className="col-xs-6 col-xs-offset-2 form-group">
                        <input
                            value={this.state.name}
                            onChange={this.handleChange}
                            name="name"
                            type="text"
                            className='form-control'
                        />
                    </div>
                    <div className="col-xs-2 form-group">
                        <button type="submit" className="btn btn-success btn-block">Search</button>
                    </div>
                </form>
                {this.renderList()}
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        repos: state.repo
    }
}
export default connect(mapStateToProps, actions)(HomePage);

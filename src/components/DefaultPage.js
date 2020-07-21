import React, { Component } from 'react'

export default class DefaultPage extends Component {
    render() {
        return (
          <div className="container">
						<div className="row">
							<div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
								<h1 className="display-3">404</h1>
								<h2>Error Page Not Found</h2>
								<h3>the requested URL<br/>
									<span className="text-danger">
										" {this.props.location.pathname} "
									</span><br />
									was not found
								</h3>
							</div>
						</div> 
          </div>
        )
    }
}

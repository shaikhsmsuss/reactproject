import React, { Component } from "react";

export class Content extends Component {
  render() {
    return (
      <div>
        <div class="content-wrap">
          <div class="main">
            <div class="container-fluid">
              <div class="row">
                <div class="col-lg-8 p-r-0 title-margin-right">
                  <div class="page-header">
                    <div class="page-title">
                      <h1>
                        Hello, <span>Welcome Here</span>
                      </h1>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 p-l-0 title-margin-left">
                  <div class="page-header">
                    <div class="page-title">
                      <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                          <a href="#">Dashboard</a>
                        </li>
                        <li class="breadcrumb-item active">Home</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
              <section id="main-content">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="card">
                      <div class="stat-widget-two">
                        <div class="stat-content">
                          <div class="stat-text">TeacupExplorer </div>
                          <div class="stat-digit">
                            {" "}
                            <i class="fa fa-folder" aria-hidden="true" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;

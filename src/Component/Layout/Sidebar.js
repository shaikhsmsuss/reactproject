import React, { Component } from "react";

export class Sidebar extends Component {
  render() {
    return (
      <div>
        <div class="sidebar sidebar-hide-to-small sidebar-shrink sidebar-gestures">
          <div class="nano">
            <div class="nano-content">
              <div class="logo">
                <a href="index.html">
                  <span>TeacupExplorer</span>
                </a>
              </div>
              <ul>
                <li class="label">Main</li>
                <li class="active">
                  <a class="sidebar-sub-toggle">
                    <i class="ti-home" /> Dashboard{" "}
                    <span class="badge badge-primary">2</span>{" "}
                    <span class="sidebar-collapse-icon ti-angle-down" />
                  </a>
                  <ul>
                    <li>
                      <a href="index.html">Dashboard 1</a>
                    </li>
                    <li>
                      <a href="index1.html">Dashboard 2</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a class="sidebar-sub-toggle">
                    <i class="ti-bar-chart-alt" /> Charts{" "}
                  </a>
                </li>
                <li>
                  <a href="app-event-calender.html">
                    <i class="ti-calendar" /> Calender{" "}
                  </a>
                </li>
                <li>
                  <a href="app-email.html">
                    <i class="ti-email" /> Email
                  </a>
                </li>
                <li>
                  <a href="app-profile.html">
                    <i class="ti-user" /> Profile
                  </a>
                </li>
                <li>
                  <a href="app-widget-card.html">
                    <i class="ti-layout-grid2-alt" /> Widget
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;

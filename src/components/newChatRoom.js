import React from "react";
import "./newChatRoom.css";
import $ from 'jquery';

$(function(){
  if ($('#ms-menu-trigger')[0]) {
       $('body').on('click', '#ms-menu-trigger', function() {
           $('.ms-menu').toggleClass('toggled'); 
       });
   }
});


function ChatRoom() {
  return (
    <div>
      <div className="container bootstrap snippets bootdey">
        <div className="tile tile-alt" id="messages-main">
          <div className="ms-menu">
            <div className="ms-user clearfix">
              <img
                src="https://bootdey.com/img/Content/avatar/avatar1.png"
                alt=""
                className="img-avatar pull-left"
              />
              <div>
                Signed in as <br /> m-hollaway@gmail.com
              </div>
            </div>
            <div className="p-15">
              <div className="dropdown">
                <a
                  className="btn btn-primary btn-block"
                  href
                  data-toggle="dropdown"
                >
                  Messages <i className="caret m-l-5" />
                </a>
                <ul className="dropdown-menu dm-icon w-100">
                  <li>
                    <a href>
                      <i className="fa fa-envelope" /> Messages
                    </a>
                  </li>
                  <li>
                    <a href>
                      <i className="fa fa-users" /> Contacts
                    </a>
                  </li>
                  <li>
                    <a href>
                      <i className="fa fa-format-list-bulleted"> </i>Todo Lists
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="list-group lg-alt">
              <a className="list-group-item media" href>
                <div className="pull-left">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar2.png"
                    alt=""
                    className="img-avatar"
                  />
                </div>
                <div className="media-body">
                  <small className="list-group-item-heading">
                    Davil Parnell
                  </small>
                  <small className="list-group-item-text c-gray">
                    Fierent fastidii recteque ad pro
                  </small>
                </div>
              </a>
              <a className="list-group-item media" href>
                <div className="pull-left">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar3.png"
                    alt=""
                    className="img-avatar"
                  />
                </div>
                <div className="media-body">
                  <div className="list-group-item-heading">Ann Watkinson</div>
                  <small className="list-group-item-text c-gray">
                    Cum sociis natoque penatibus{" "}
                  </small>
                </div>
              </a>
              <a className="list-group-item media" href>
                <div className="pull-left">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar4.png"
                    alt=""
                    className="img-avatar"
                  />
                </div>
                <div className="media-body">
                  <div className="list-group-item-heading">Marse Walter</div>
                  <small className="list-group-item-text c-gray">
                    Suspendisse sapien ligula
                  </small>
                </div>
              </a>
              <a className="list-group-item media" href>
                <div className="lv-avatar pull-left">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar5.png"
                    alt=""
                    className="img-avatar"
                  />
                </div>
                <div className="media-body">
                  <div className="list-group-item-heading">Jeremy Robbins</div>
                  <small className="list-group-item-text c-gray">
                    Phasellus porttitor tellus nec
                  </small>
                </div>
              </a>
              <a className="list-group-item media" href>
                <div className="lv-avatar pull-left">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar6.png"
                    alt=""
                    className="img-avatar"
                  />
                </div>
                <div className="media-body">
                  <div className="list-group-item-heading">Reginald Horace</div>
                  <small className="list-group-item-text c-gray">
                    Quisque consequat arcu eget
                  </small>
                </div>
              </a>
              <a className="list-group-item media" href>
                <div className="pull-left">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar7.png"
                    alt=""
                    className="img-avatar"
                  />
                </div>
                <div className="media-body">
                  <div className="list-group-item-heading">Shark Henry</div>
                  <small className="list-group-item-text c-gray">
                    Nam lobortis odio et leo maximu
                  </small>
                </div>
              </a>
              <a className="list-group-item media" href>
                <div className="pull-left">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar1.png"
                    alt=""
                    className="img-avatar"
                  />
                </div>
                <div className="media-body">
                  <div className="list-group-item-heading">Paul Van Dack</div>
                  <small className="list-group-item-text c-gray">
                    Nam posuere purus sed velit auctor sodales
                  </small>
                </div>
              </a>
              <a className="list-group-item media" href>
                <div className="lv-avatar pull-left">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar2.png"
                    alt=""
                    className="img-avatar"
                  />
                </div>
                <div className="media-body">
                  <div className="list-group-item-heading">James Anderson</div>
                  <small className="list-group-item-text c-gray">
                    Vivamus imperdiet sagittis quam
                  </small>
                </div>
              </a>
              <a className="list-group-item media" href>
                <div className="lv-avatar pull-left">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar3.png"
                    alt=""
                    className="img-avatar"
                  />
                </div>
                <div className="media-body">
                  <div className="list-group-item-heading">Kane Williams</div>
                  <small className="list-group-item-text c-gray">
                    Suspendisse justo nulla luctus nec
                  </small>
                </div>
              </a>
            </div>
          </div>
          <div className="ms-body">
            <div className="action-header clearfix">
              <div className="visible-xs" id="ms-menu-trigger">
                <i className="fa fa-bars" />
              </div>
              <div className="pull-left hidden-xs">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar2.png"
                  alt=""
                  className="img-avatar m-r-10"
                />
                <div className="lv-avatar pull-left"></div>
                <span>David Parbell</span>
              </div>
              <ul className="ah-actions actions">
                <li>
                  <a href>
                    <i className="fa fa-trash" />
                  </a>
                </li>
                <li>
                  <a href>
                    <i className="fa fa-check" />
                  </a>
                </li>
                <li>
                  <a href>
                    <i className="fa fa-clock-o" />
                  </a>
                </li>
                <li className="dropdown">
                  <a href data-toggle="dropdown" aria-expanded="true">
                    <i className="fa fa-sort" />
                  </a>
                  <ul className="dropdown-menu dropdown-menu-right">
                    <li>
                      <a href>Latest</a>
                    </li>
                    <li>
                      <a href>Oldest</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href data-toggle="dropdown" aria-expanded="true">
                    <i className="fa fa-bars" />
                  </a>
                  <ul className="dropdown-menu dropdown-menu-right">
                    <li>
                      <a href>Refresh</a>
                    </li>
                    <li>
                      <a href>Message Settings</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="message-feed media">
              <div className="pull-left">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar1.png"
                  alt=""
                  className="img-avatar"
                />
              </div>
              <div className="media-body">
                <div className="mf-content">
                  Quisque consequat arcu eget odio cursus, ut tempor arcu
                  vestibulum. Etiam ex arcu, porta a urna non, lacinia
                  pellentesque orci. Proin semper sagittis erat, eget
                  condimentum sapien viverra et. Mauris volutpat magna nibh, et
                  condimentum est rutrum a. Nunc sed turpis mi. In eu massa a
                  sem pulvinar lobortis.
                </div>
                <small className="mf-date">
                  <i className="fa fa-clock-o" /> 20/02/2015 at 09:00
                </small>
              </div>
            </div>
            <div className="message-feed right">
              <div className="pull-right">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar2.png"
                  alt=""
                  className="img-avatar"
                />
              </div>
              <div className="media-body">
                <div className="mf-content">
                  Mauris volutpat magna nibh, et condimentum est rutrum a. Nunc
                  sed turpis mi. In eu massa a sem pulvinar lobortis.
                </div>
                <small className="mf-date">
                  <i className="fa fa-clock-o" /> 20/02/2015 at 09:30
                </small>
              </div>
            </div>
            <div className="message-feed media">
              <div className="pull-left">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar1.png"
                  alt=""
                  className="img-avatar"
                />
              </div>
              <div className="media-body">
                <div className="mf-content">Etiam ex arcumentum</div>
                <small className="mf-date">
                  <i className="fa fa-clock-o" /> 20/02/2015 at 09:33
                </small>
              </div>
            </div>
            <div className="message-feed right">
              <div className="pull-right">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar2.png"
                  alt=""
                  className="img-avatar"
                />
              </div>
              <div className="media-body">
                <div className="mf-content">
                  Etiam nec facilisis lacus. Nulla imperdiet augue ullamcorper
                  dui ullamcorper, eu laoreet sem consectetur. Aenean et ligula
                  risus. Praesent sed posuere sem. Cum sociis natoque penatibus
                  et magnis dis parturient montes,
                </div>
                <small className="mf-date">
                  <i className="fa fa-clock-o" /> 20/02/2015 at 10:10
                </small>
              </div>
            </div>
            <div className="message-feed media">
              <div className="pull-left">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar1.png"
                  alt=""
                  className="img-avatar"
                />
              </div>
              <div className="media-body">
                <div className="mf-content">
                  Cum sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Etiam ac tortor ut elit sodales
                  varius. Mauris id ipsum id mauris malesuada tincidunt.
                  Vestibulum elit massa, pulvinar at sapien sed, luctus
                  vestibulum eros. Etiam finibus tristique ante, vitae rhoncus
                  sapien volutpat eget
                </div>
                <small className="mf-date">
                  <i className="fa fa-clock-o" /> 20/02/2015 at 10:24
                </small>
              </div>
            </div>
            <div className="msb-reply">
              <textarea
                placeholder="What's on your mind..."
                defaultValue={""}
              />
              <button>
                <i className="fa fa-paper-plane-o" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ChatRoom;

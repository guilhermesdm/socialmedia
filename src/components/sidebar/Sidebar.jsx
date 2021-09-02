import "./sidebar.css"
import {RssFeed, Chat, PlayCircleFilled, Group, Bookmarks, HelpOutline, WorkOutline, Event, School} from "@material-ui/icons"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed className="SidebarIcon"/>
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <Chat className="SidebarIcon"/>
                        <span className="sidebarListItemText">Chats</span>
                    </li>
                    <li className="sidebarListItem">
                        <PlayCircleFilled className="SidebarIcon"/>
                        <span className="sidebarListItemText">Videos</span>
                    </li>
                    <li className="sidebarListItem">
                        <Group className="SidebarIcon"/>
                        <span className="sidebarListItemText">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        <Bookmarks className="SidebarIcon"/>
                        <span className="sidebarListItemText">Bookmarks</span>
                    </li>
                    <li className="sidebarListItem">
                        <HelpOutline className="SidebarIcon"/>
                        <span className="sidebarListItemText">Questions</span>
                    </li>
                    <li className="sidebarListItem">
                        <WorkOutline className="SidebarIcon"/>
                        <span className="sidebarListItemText">Jobs</span>
                    </li>
                    <li className="sidebarListItem">
                        <Event className="SidebarIcon"/>
                        <span className="sidebarListItemText">Events</span>
                    </li>
                    <li className="sidebarListItem">
                        <School className="SidebarIcon"/>
                        <span className="sidebarListItemText">Courses</span>
                    </li>
                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr"/>
                <li className="sidebarFriend">
                    <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt=""/>
                    <span className="sidebarFriendName">Jane Doe</span>
                </li>
                <li className="sidebarFriend">
                    <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt=""/>
                    <span className="sidebarFriendName">Jane Doe</span>
                </li>
                <li className="sidebarFriend">
                    <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt=""/>
                    <span className="sidebarFriendName">Jane Doe</span>
                </li>
                <li className="sidebarFriend">
                    <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt=""/>
                    <span className="sidebarFriendName">Jane Doe</span>
                </li>
                <li className="sidebarFriend">
                    <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt=""/>
                    <span className="sidebarFriendName">Jane Doe</span>
                </li>
                <li className="sidebarFriend">
                    <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt=""/>
                    <span className="sidebarFriendName">Jane Doe</span>
                </li>
                <li className="sidebarFriend">
                    <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt=""/>
                    <span className="sidebarFriendName">Jane Doe</span>
                </li>
                <li className="sidebarFriend">
                    <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt=""/>
                    <span className="sidebarFriendName">Jane Doe</span>
                </li>
                <li className="sidebarFriend">
                    <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt=""/>
                    <span className="sidebarFriendName">Jane Doe</span>
                </li>
                <li className="sidebarFriend">
                    <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt=""/>
                    <span className="sidebarFriendName">Jane Doe</span>
                </li>
                <li className="sidebarFriend">
                    <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt=""/>
                    <span className="sidebarFriendName">Jane Doe</span>
                </li>
                <li className="sidebarFriend">
                    <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt=""/>
                    <span className="sidebarFriendName">Jane Doe</span>
                </li>
                <li className="sidebarFriend">
                    <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt=""/>
                    <span className="sidebarFriendName">Jane Doe</span>
                </li>
                <li className="sidebarFriend">
                    <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt=""/>
                    <span className="sidebarFriendName">Jane Doe</span>
                </li>
                <li className="sidebarFriend">
                    <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt=""/>
                    <span className="sidebarFriendName">Jane Doe</span>
                </li>
                <li className="sidebarFriend">
                    <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt=""/>
                    <span className="sidebarFriendName">Jane Doe</span>
                </li>
                <li className="sidebarFriend">
                    <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt=""/>
                    <span className="sidebarFriendName">Jane Doe</span>
                </li>
                <li className="sidebarFriend">
                    <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt=""/>
                    <span className="sidebarFriendName">Jane Doe</span>
                </li>
                <li className="sidebarFriend">
                    <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt=""/>
                    <span className="sidebarFriendName">Jane Doe</span>
                </li>
                <li className="sidebarFriend">
                    <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt=""/>
                    <span className="sidebarFriendName">Jane Doe</span>
                </li>
                <li className="sidebarFriend">
                    <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt=""/>
                    <span className="sidebarFriendName">Jane Doe</span>
                </li>
            </div>
        </div>
    )
}
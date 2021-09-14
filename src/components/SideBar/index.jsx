import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Icon } from '../../assets/svgs/Icon';

import './SideBar.scss';

export default function SideBar(props) {
	const [open, setOpen] = useState(true);
	const openSideBar = () => {
		setOpen(!open);
	};

	return (
		<div className={open ? 'navbar navbar--small' : 'navbar'}>
			<div className="navbar__header" onClick={openSideBar}>
				<Icon.SideBarLogo className="navbar__link__icon navbar__link__cusor"/>
				<div className="navbar__header__content small--hide">
					<h3 className="navbar__header__content__text">Acme Co.</h3>
					<span className="navbar__header__content__desc">
						Palo Alto, CA
					</span>
				</div>
			</div>
			<div className="navbar__group navbar__group--first">
				<span className="navbar__group__name">main menu</span>
				<ul className="navbar__list">
					<li className="navbar__item">
						<NavLink to="/dashboard" exact className="navbar__link">
							<Icon.Dashboard className="navbar__link__icon" />
							<span className="navbar__link__text small--hide">
								Dashboard
							</span>
						</NavLink>
					</li>
					<li className="navbar__item">
						<NavLink
							to="/app"
							exact
							className="navbar__link disable"
						>
							<Icon.IconApp className="navbar__link__icon" />

							<span className="navbar__link__text small--hide">
								Apps
							</span>
						</NavLink>
					</li>
					<li className="navbar__item">
						<NavLink
							to="/security"
							exact
							className="navbar__link disable"
						>
							<Icon.Security className="navbar__link__icon" />

							<span className="navbar__link__text small--hide">
								Securiry
							</span>
							<Icon.ArrowDown className="navbar__link__icon small--hide" />
						</NavLink>
					</li>
					<li className="navbar__item">
						<NavLink to="/report" exact className="navbar__link">
							<Icon.Report className="navbar__link__icon" />

							<span className="navbar__link__text small--hide">
								Reports
							</span>
						</NavLink>
					</li>
					<li className="navbar__item">
						<NavLink
							to="/people"
							exact
							className="navbar__link disable"
						>
							<Icon.People className="navbar__link__icon" />
							<span className="navbar__link__text small--hide">
								People
							</span>
						</NavLink>
					</li>
					<li className="navbar__item">
						<NavLink
							to="/task"
							exact
							className="navbar__link disable"
						>
							<Icon.Task className="navbar__link__icon" />
							<span className="navbar__link__text small--hide">
								Tasks
							</span>
						</NavLink>
					</li>
					<li className="navbar__item">
						<NavLink to="/chat" exact className="navbar__link">
							<Icon.Chat className="navbar__link__icon" />

							<span className="navbar__link__text small--hide">
								Chat
							</span>
							<span className="navbar__link__number small--hide">
								453
							</span>
						</NavLink>
					</li>
				</ul>
			</div>

			<div className="navbar__group">
				<span className="navbar__group__name">Worklows</span>
				<ul className="navbar__list">
					<li className="navbar__item">
						<NavLink to="/gallery" exact className="navbar__link">
							<Icon.Gallery className="navbar__link__icon" />
							<span className="navbar__link__text small--hide">
								Gallery
							</span>
						</NavLink>
					</li>

					<li className="navbar__item">
						<NavLink
							to="/workflows"
							exact
							className="navbar__link disable"
						>
							<Icon.Device className="navbar__link__icon" />
							<span className="navbar__link__text small--hide">
								Workflows
							</span>
						</NavLink>
					</li>

					<li className="navbar__item">
						<NavLink to="/my-task" exact className="navbar__link">
							<Icon.ListAlt className="navbar__link__icon" />
							<span className="navbar__link__text small--hide">
								My Tasks
							</span>
						</NavLink>
					</li>
				</ul>
			</div>

			<div className="navbar__group">
				<span className="navbar__group__name">General</span>
				<ul className="navbar__list">
					<li className="navbar__item">
						<NavLink
							to="/intergration"
							exact
							className="navbar__link disable"
						>
							<Icon.DeviceHub className="navbar__link__icon" />
							<span className="navbar__link__text small--hide">
								Intergrations
							</span>
						</NavLink>
					</li>

					<li className="navbar__item">
						<NavLink
							to="/user"
							exact
							className="navbar__link disable"
						>
							<Icon.Group className="navbar__link__icon" />
							<span className="navbar__link__text small--hide">
								Users
							</span>
						</NavLink>
					</li>

					<li className="navbar__item">
						<NavLink
							to="/setting"
							exact
							className="navbar__link disable"
						>
							<Icon.Setting className="navbar__link__icon" />
							<span className="navbar__link__text small--hide">
								Settings
							</span>
						</NavLink>
					</li>
				</ul>
			</div>

			<button
				className={`navbar__btn ${open ? '' : 'navbar__btn--reverse'}`}
				onClick={openSideBar}
			>
				<Icon.ArrowRight className="navbar__link__icon" />
			</button>
		</div>
	);
}

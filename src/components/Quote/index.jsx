import React from 'react';
import { Icon } from '../../assets/svgs/Icon';

export default function Quote(props) {
	const { quote, quoteUser } = props;
	return (
		<div className="chatmain__item__right__quote">
			<Icon.Line2 className="chatmain__item__right__quote__icon" />
			<div className="chatmain__item__right__quote__content">
				<div className="chatmain__item__right__quote__content__top">
					<p className="chatmain__item__right__quote__content__top__username">
						{quote}
					</p>
					<Icon.Arrow className="chatmain__item__right__quote__content__top__icon" />
				</div>
				<p className="chatmain__item__right__quote__content__bottom">
					{quoteUser}
				</p>
			</div>
		</div>
	);
}

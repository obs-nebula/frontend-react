import React from 'react';
const ContentComponent = ({ content }) => {
	return (
			<div className="wrapper">
				<div className="container">

					{

						content.map((item, index) => {
							return (
								<div key={index}>
									<div style={{ padding: ' 20px', margin: '3% 30%', backgroundColor: '#E0E0E0' }}>
										<h3 >name:  {item.name.first}   {item.name.last}</h3>
										<img src={item.picture.thumbnail} />
										<div >username: {item.login.username}</div>
										<div>email: {item.email}</div>
										<div >location: {item.location.city}</div>
									</div>
								</div>

							);
						})
					}

				</div>
			</div>

	);
};
export default ContentComponent;
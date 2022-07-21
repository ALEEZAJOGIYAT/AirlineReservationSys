import React, { useState, useEffect } from "react";
import NavBar from "../../common/navbar/Unav";

export const UserProfile = () => {
	return (
		<>
			<NavBar />

			<div>
				<div tabindex="-1">
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title">USER PROFILE</h5>
							</div>
							<div className="modal-body">
								<div className="container">
									<div className="form-group">
										<label className="labels form-label" for="title">
											Role:User
										</label>
									</div>

									<div className="form-group">
										<label className="labels form-label" for="title">
											Email Address
										</label>
										<input
											placeholder="Email Title here"
											name="title"
											type="text"
											id="title"
											className="form-control"
											style={{ width: "35%" }}
											value="sana245@gmail.com"
										/>
									</div>
									<div className="form-group">
										<label className="labels form-label" for="title">
											Description
										</label>
										<textarea
											rows="3"
											name="jobDescription"
											id="exampleForm.ControlTextarea1"
											className="form-control"
											style={{ width: "35%" }}
										/>
									</div>
								</div>
								{/* <p>{user.email}</p> */}
							</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-dark">
									Update
								</button>
							</div>
						</div>
					</div>
				</div>
				{/* </Container> */}
			</div>
		</>
	);
};

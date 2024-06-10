import React, { useContext, useEffect, useState} from "react";
import { formatNumber } from "../utils/betslip";
import { Link } from "react-router-dom";
import {Context} from '../../context/store';

const ProfileMenu = (props) => {
  const [state, ] = useContext(Context);
  const [user, setUser] = useState(props?.user);
  
  useEffect(() => {
      setUser(state?.user)
  }, [state?.user])

  return (
    <>
      {user && (
        <div className="profile  row top-profile">
          <div className="d-md-block col-12">
            
              <div className="row uppercase">
                <div className="col-6 d-none d-md-block">
                  &nbsp;
                </div>
                <div className="col-3 d-block d-sm-none">
                  &nbsp;
                </div>
                <div className="col-3 col-sm-3 mobile-right-cols">
                  <div className="cream-text">BALANCE</div>
                  <span style={{fontSize:"14px"}}>TZS {formatNumber(user.balance) || 0}</span>
                </div>
                <div className="col-3 d-n d-md-block">
                    <Link to="/deposit" className="cg maramovers-blue  btn mobile-btn-sm" style={{width:"100%"}}>DEPOSIT</Link>
                </div>
                
              </div>
          </div>         

        </div>


      )}
    </>
  );
};

export default ProfileMenu;

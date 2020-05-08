import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <div>
                 {/* footer */}
      <footer className="mt-5 py-2" style={{background: '#e22027'}}>
        <div className="container">
          <div className="row" style={{display: 'flex', justifyContent: 'space-around'}}>
            <div className="col-xs-3 text-white"><h5>Điều khoản sử dụng</h5></div>
            <div className="col-xs-3 text-white"><h5>Quyền lợi</h5></div>
            <div className="col-xs-3 text-white"><h5>Tuyển dụng</h5></div>
            <div className="col-xs-3 text-white"><h5>Liên hệ quảng cáo</h5></div>
          </div>
        </div>
      </footer>
            </div>
        )
    }
}

export default Footer;
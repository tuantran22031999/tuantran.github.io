import React, { Component } from 'react'

class Img extends Component {
    render() {
        return (
            <div>
                <div className="row img">
            <div className="col-md-4 col-sm-12 text-center mt-5">
              <img src="https://static2.yan.vn/400x200/YanThumbNews/2167221/202005/original_64d00bec-4bee-4713-af3f-62e433c1f7ac.jpg" alt="anh" width={400} height={200} />
              <button type="button" className="btn btn-danger mt-2">Delete</button>
            </div>
            <div className="col-md-4 col-sm-12 text-center mt-5">
              <img src="https://static2.yan.vn/400x200/YanThumbNews/2167221/202005/original_64d00bec-4bee-4713-af3f-62e433c1f7ac.jpg" alt="anh" width={400} height={200} />
              <button type="button" className="btn btn-danger mt-2">Delete</button>
            </div>
            <div className="col-md-4 col-sm-12 text-center mt-5">
              <img src="https://static2.yan.vn/400x200/YanThumbNews/2167221/202005/original_64d00bec-4bee-4713-af3f-62e433c1f7ac.jpg" alt="anh" width={400} height={200} />
              <button type="button" className="btn btn-danger mt-2">Delete</button>
            </div>
          </div>
            </div>
        )
    }
}

export default Img;

import React, { Component } from 'react'
import { connect } from 'react-redux';

class Page extends Component {

  slug = (str) =>
  {
      // Chuyển hết sang chữ thường
      str = str.toLowerCase();     
   
      // xóa dấu
      str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
      str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
      str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
      str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
      str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
      str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
      str = str.replace(/(đ)/g, 'd');
   
      // Xóa ký tự đặc biệt
      str = str.replace(/([^0-9a-z-\s])/g, '');
   
      // Xóa khoảng trắng thay bằng ký tự -
      str = str.replace(/(\s+)/g, '-');
   
      // xóa phần dự - ở đầu
      str = str.replace(/^-+/g, '');
   
      // xóa phần dư - ở cuối
      str = str.replace(/-+$/g, '');
   
      // return
      return str;
  }

  setPage = () =>{
    if(this.props.data !== null){
      return this.props.data.map((value,key) =>{
        if(value._id === this.props.match.params.id){
          return (
            <div className="col-xs-12 text-white" key={key}>
            <h1>{value.title}</h1>
          <h5 className="my-3">{value.short_text}</h5>
            <img src={value.img} alt="anh" width={730} height={878} style={{maxWidth: '100%', height: 'auto'}} />
          <p className="mt-3 mb-1">{value.text}</p>
          <p className="mb-1">{value.time}</p>
          <p style={{color: '#e22027'}}>{value.author}</p>
          </div>
          )
        }
      });
    }
  }

  setNews = () =>{
    if(this.props.data !== null){
      var count = 0;
      return this.props.data.map((value,key) =>{
        if(value._id !== this.props.match.params.id && count < 5){
          count++;
          return (
            <div className="row my-5" style={{marginLeft: '190px'}} key={key}>
            <div className="col-xs-4">
            <div className="card" style={{border: '1px solid black'}}>
              <a href={`/${value.theme}/${this.slug(value.title)}.${value._id}`} title={value.title}><img className="card-img-top" src={value.img_title} alt="anh" /></a>
            </div>
          </div>
          <div className="col-xs-4" style={{width: '57%'}}>
            <div className="card" style={{border: '1px solid black', width: '60%'}}>
              <div className="card-body pt-0" style={{background: 'black'}}>
          <a href={`/${value.theme}/${this.slug(value.title)}.${value._id}`} style={{color: 'white', textDecoration: 'none'}}><h5 style={{width: '100%'}} className="card-title">{value.title}</h5></a>
          <p className="card-text text-white" style={{width: '100%'}}>{value.short_text}</p>
              </div>
            </div>
          </div> 
          </div>  
          )
        }
      });
    }
  }

    render() {
        return (
            <div>
                {/* page */}
      <div className="page mt-5">
        <div className="container">
          <div className="row mx-auto" style={{width: '65%'}}>
           {this.setPage()};
          </div>
          <hr />
          <h3 className="ml-0 text-white">Tin Nổi Bật</h3>
          {this.setNews()};
        </div>
      </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.mix
  }
}


export default connect(mapStateToProps)(Page)

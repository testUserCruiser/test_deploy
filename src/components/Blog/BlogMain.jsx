import React, { Component } from 'react'
import './snow.css'
// import './quill.bubble.css'
import ReactQuill, { Quill } from 'react-quill'
import './blogmain.css'
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios';
import $ from 'jquery';



var Size = Quill.import('attributors/style/size');
Size.whitelist = ['14px', '16px', '18px', '20px', '21px', '22px', '24px', '26px'];
Quill.register(Size, true);

class BlogMain extends Component {

    state = {
        title: '',
        deltaData : null,
        returnedDelta: null,
        progress: false,
        tag1: '',
        tag2: '',
        tag3: '',
        successresp: false
    }


    handleInput = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      })
    }

    componentDidMount(){
      let _this = this;
      $('select[data-menu]').each(function() {
        /* eslint-disable */
        let select = $(this),
            type = select.data('menu'),
            menu = $('<div />').addClass('select-menu ' + type),
            button = $('<button />'),
            buttonDiv = $('<div />'),
            current = $('<span />').text(select.find('option:selected').text()).appendTo(buttonDiv),
            arrow = $('<em />').prependTo(button);
        
        button.css({
            '--h': select.outerHeight(),
            '--w': select.outerWidth()
        });
    
        select.wrap(menu);
    
        button.append(buttonDiv).insertAfter(select);
    
    });
    
    $(document).on('click', '.select-menu', function(e) {
    
        let menu = $(this),
            select = menu.children('select'),
            options = select.find('option'),
            active = select.find('option:selected'),
            button = menu.children('button'),
            buttonDiv = button.children('div'),
            current = buttonDiv.children('span');
        // console.log(menu[0].innerText)
        // console.log(current[0].innerText)
        if(!menu.hasClass('change')) {
    
            let nextOption = options.eq(active.index() === options.length - 1 ? 0 : active.index() + 1),
                next = $('<span />').addClass('next').text(nextOption.text()).appendTo(buttonDiv);
            if(nextOption[0].value=== "val1"){
                _this.setState(state => {
                  var tag1 = state.tag1
                  tag1 = nextOption[0].innerHTML;
                  return {
                    tag1,
                  };
                });

            }

            if(nextOption[0].value=== "val2"){
              _this.setState(state => {
                var tag2 = state.tag2
                tag2 = nextOption[0].innerHTML;
                return {
                  tag2,
                };
              });

          }

          if(nextOption[0].value=== "val3"){
            _this.setState(state => {
              var tag3 = state.tag3
              tag3 = nextOption[0].innerHTML;
              return {
                tag3,
              };
            });

        }
    
            options.attr('selected', false);
            nextOption.attr('selected', true);
    
            menu.addClass('change');
    
            setTimeout(() => {
    
                next.removeClass('next');
                menu.removeClass('change');
                current.remove();
    
            }, 650);
    
        }
    
    });
    }


    handleChange = (value) => {

      const editor = this.reactQuillRef.getEditor();

      this.setState({
        deltaData: editor.getContents()
      })
    }

    handleSubmit = (event) => {
      event.preventDefault()
      if(this.state.deltaData === null){
        return alert("there is no blog data")
      }
      if(this.state.deltaData.ops.length === 1){
        if(this.state.deltaData.ops[0].insert === '\n'){
          return alert("please write the blog first")
        }
      }
      if(this.state.title.length <= 20){
        return alert("Blog title too small")
      }
      var taglist = []
      if(this.state.tag1 === "None" || this.state.tag1 === ""){
          
      }else{
        taglist.push(this.state.tag1)
      }
      if(this.state.tag2 === "None" || this.state.tag2 === ""){
        
      }else{
        taglist.push(this.state.tag2)
      }
      if(this.state.tag3 === "None" || this.state.tag3 === ""){
        
      }else{
        taglist.push(this.state.tag3)
      }
      if(taglist.length === 0){
        return alert("At least one tag is required")
      }

      this.setState({
        progress: true
      })
      const headers = {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Access-Control-Allow-Origin': 'https://akshaykalucha.com'
      }
      axios.post(`https://akshayreactportfoliobackend.herokuapp.com/api/v1/backend1/test/`,
       {title: this.state.title, deltaData: JSON.stringify(this.state.deltaData), tags: taglist},
       {headers: headers, withCredentials: true, xsrfCookieName: 'csrftoken_testtest', xsrfHeaderName: 'X-CSRFToken',}
       )
      .then(res=> {
        this.setState({
          returnedDelta: JSON.parse(res.data.Data.deltaData),
          progress: false,
          successresp: true
        })
      })
      .catch(err=>{
        console.log(err)
      })
    }
    

  render() {
    let Cirprogress = <CircularProgress />
    var SizeStyle = Quill.import('attributors/style/align')
    Quill.register(SizeStyle, true);


    BlogMain.modules = {}
    BlogMain.modules.syntax = true
    BlogMain.modules.toolbar = [
      ['bold', 'italic', 'underline', 'strike'],       // toggled buttons
      ['blockquote', 'code-block'],                    // blocks
      [{ 'header': 1 }, { 'header': 2 }],              // custom button values
      ['link','image'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],    // lists
      // [{ 'script': 'sub'}, { 'script': 'super' }],     // superscript/subscript
      [{ 'indent': '-1'}, { 'indent': '+1' }],         // outdent/indent
      [{ 'direction': 'rtl' }],                        // text direction
      // [{ 'size': ['small', false, 'large', 'huge'] }], // custom dropdown
      [{ 'size': ['14px', '16px', '18px', '20px', '21px', '22px', '24px', '26px'] }],
      // [{ 'header': [1, 2, 3, 4, 5, 6, false] }],       // header dropdown
      [{ 'color': [] }, { 'background': [] }],         // dropdown with defaults
      [{ 'font': [] }],                                // font family
      [{ 'align': [] }],                               // text align
      ['clean'],                                       // remove formatting
    ]

    BlogMain.formats = [
      'header', 'font', 'background', 'color', 'code', 'size',
      'bold', 'italic', 'underline', 'strike', 'blockquote', 'image',
      'list', 'bullet', 'indent', 'script', 'align', 'direction',
      'link', 'image', 'code-block', 'formula', 'video', 'size'
    ]



    return (
      <div>
        {!this.state.successresp ? <div className="mainblogcreate">
          <div className="myEditor">
                <h1 className="blogheading">Design a Blog:</h1>
                <ReactQuill
                theme="snow" onChange={this.handleChange}
                formats={BlogMain.formats} modules={BlogMain.modules}
                ref={(el) => { this.reactQuillRef = el }} />
            </div>
            <div className="titlepost">
              <p>Give your Blog a Title....</p>
              <input type="text" className="postTitle" name="title" value={this.state.title} onChange={event => this.handleInput(event)} />
            </div>

              <div className="tagsd">
                <div className="selecttags">
                  <p>Select Tags:</p>
                </div>
                <div className="main_tags">

                  <select onChange={event => this.handleSelects(event)} data-menu="vertical">
                      <option value="val1" name="none" defaultValue>None</option>
                      <option value="val1" name="Tech">tech</option>
                      <option value="val1" name="Dev">dev</option>
                      <option value="val1" name="Travel">travel</option>
                      <option value="val1" name="Bio">bio</option>
                      <option value="val1" name="React">react</option>
                      <option value="val1" name="Gatsby">gatsby</option>
                      <option value="val1" name="Stack">stack</option>
                  </select>

                  <select data-menu="vertical">
                      <option value="val2" defaultValue>None</option>
                      <option value="val2">tech</option>
                      <option value="val2">dev</option>
                      <option value="val2">travel</option>
                      <option value="val2">bio</option>
                      <option value="val2">react</option>
                      <option value="val1" name="Gatsby">gatsby</option>
                      <option value="val2">stack</option>
                  </select>

                  <select data-menu="vertical">
                      <option value="val3" defaultValue>None</option>
                      <option value="val3">tech</option>
                      <option value="val3">dev</option>
                      <option value="val3">travel</option>
                      <option value="val3">bio</option>
                      <option value="val3">react</option>
                      <option value="val1" name="Gatsby">gatsby</option>
                      <option value="val3">stack</option>
                  </select>

                </div>
              </div>

            <div className="submitButton">
              <button type="submit" onClick={event => this.handleSubmit(event)}>Submit Content</button>
              {this.state.progress ? 
                <div className="cirLoading">
                  {Cirprogress}
                </div>
               : null}
            </div>
        </div>: null}


        {this.state.successresp ? <div className="quilltextview">
          <ReactQuill
            value={this.state.returnedDelta}
            readOnly={true}
            // modules={{syntax: true}}
            theme={"bubble"}
          />
        </div>: null}

      </div>
    );
  }
}

export default BlogMain;

